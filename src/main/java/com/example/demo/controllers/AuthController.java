package com.example.demo.controllers;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.models.User;
import com.example.demo.payloads.ApiResponse;
import com.example.demo.payloads.JwtAuthenticationResponse;
import com.example.demo.payloads.LoginRequest;
import com.example.demo.payloads.OAuthRequest;
import com.example.demo.payloads.SignUpRequest;
import com.example.demo.payloads.UserSummary;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtTokenProvider;
import com.example.demo.security.Role;
import com.example.demo.security.UserPrincipal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.Collections;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    JwtTokenProvider tokenProvider;
    
    private Authentication authenticate(String usernameOrEmail, String password) {
    	
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(usernameOrEmail,password)
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        return authentication;
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        /*Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsernameOrEmail(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);*/

        Authentication authentication = authenticate(loginRequest.getUsernameOrEmail(), 
        		loginRequest.getPassword());
        UserPrincipal auth_user = (UserPrincipal) authentication.getPrincipal();
        UserSummary user = new UserSummary(auth_user.getId(), auth_user.getUsername(), auth_user.getRole());
        /*String usernameOrEmail = loginRequest.getUsernameOrEmail();
        User logged_user = userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User", "username", usernameOrEmail));*/
        
        String jwt = tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt, user));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        if(userRepository.existsByUsername(signUpRequest.getUsername())) {
            return new ResponseEntity(new ApiResponse(false, "Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        if(userRepository.existsByEmail(signUpRequest.getEmail())) {
            return new ResponseEntity(new ApiResponse(false, "Email Address already in use!"),
                    HttpStatus.BAD_REQUEST);
        }

        // Creating user's account
        User user = new User(signUpRequest.getFirstName(), signUpRequest.getLastName(),
        		signUpRequest.getUsername(),
        		signUpRequest.getEmail(), signUpRequest.getPassword(), Role.ROLE_USER,
        		signUpRequest.getCountry(), signUpRequest.getGender()
        		);
        
        String unencrypted_passwd = user.getPassword();

        user.setPassword(passwordEncoder.encode(unencrypted_passwd));

        User result = userRepository.save(user);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/api/users/{username}")
                .buildAndExpand(result.getUsername()).toUri();
        
        Authentication authentication = authenticate(signUpRequest.getUsername(), unencrypted_passwd);

        String jwt = tokenProvider.generateToken(authentication);
        //return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
        return ResponseEntity.created(location).body(new JwtAuthenticationResponse(jwt,
        		new UserSummary(result.getId(), result.getUsername(), result.getRole())));
    }

    //For login with Google, will create a user in db with info collected by google
    @PostMapping("/oauthLogin")
    public ResponseEntity<?> oAuth(@Valid @RequestBody OAuthRequest oauthRequest) {
    	System.out.println("oauth Login");
    	String googlePass = "googleSignin";
    	User regUser;
    	//TODO validate the idToken from google
    	if(userRepository.existsByEmail(oauthRequest.getEmail())) { //User already registered
    		regUser = userRepository.findByEmail(oauthRequest.getEmail()).get();
    	}else { //Register new user
    		regUser = new User(oauthRequest.getFirstName(), oauthRequest.getLastName(), oauthRequest.getFirstName(), oauthRequest.getEmail(), googlePass, Role.ROLE_USER, null, null);
    		regUser.setPassword(passwordEncoder.encode(regUser.getPassword()));
    		regUser = userRepository.save(regUser);
    	}

    	// TODO setting username as firstName, but generates error if there is already username
    	// TODO If user has already registered without google, it wont be able to register with google, because email already exists, and needs to authenticate with password
        Authentication authentication = authenticate(regUser.getUsername(), googlePass);

        UserSummary user = new UserSummary(regUser.getId(), regUser.getUsername(), regUser.getRole());
        /*String usernameOrEmail = loginRequest.getUsernameOrEmail();
        User logged_user = userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User", "username", usernameOrEmail));*/
        String jwt = tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt, user));
    }

}