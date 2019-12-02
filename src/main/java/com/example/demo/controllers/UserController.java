package com.example.demo.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import org.springframework.util.StringUtils;
import com.example.demo.models.User;
import com.example.demo.payloads.ApiResponse;
import com.example.demo.payloads.UserResponse;
import com.example.demo.repository.UserProfile;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.CurrentUser;
import com.example.demo.security.Role;
import com.example.demo.security.UserPrincipal;
import com.example.demo.storage.StorageService;
import com.example.demo.enums.UserStatus;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.storage.AmazonS3ClientService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/users")
public class UserController {
	
	private final UserRepository userRepository;
	
    @Autowired
    private AmazonS3ClientService amazonS3ClientService;
    @Value("${aws.s3.url}")
    private String s3url;    

	public UserController(UserRepository rep, StorageService storageService) {
		this.userRepository = rep;
	}
	@GetMapping("")
	@Secured("ROLE_ADMIN")
	public List<UserProfile> getUsers() {
		return userRepository.findAllBy();
	}
	
	@PostMapping("")
	void addUser(@RequestBody User user) {
		userRepository.save(user);
	}
	
	@GetMapping("/profile")
	public UserResponse getCurrentUser(@CurrentUser UserPrincipal user) {
		return new UserResponse(userRepository.findByEmail(user.getEmail()).orElseThrow(
				() -> new ResourceNotFoundException("User", "username", user.getUsername())
		));
	}
	
	@GetMapping("/{user_id}")
	public UserResponse getUser(@PathVariable(value="user_id") long id) {
		return new UserResponse(userRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("User", "id", id)
		));
	}
	
	@DeleteMapping("/{user_id}")
	@Secured("ROLE_ADMIN")
	public ApiResponse deleteUser(@PathVariable(value="user_id") long id) {
		try {
			userRepository.deleteById(id);
			return new ApiResponse(true, "user deleted");
		} catch (Exception ex) {
			return new ApiResponse(false, "user does not exist");
		}
	}
	
	@PostMapping("/{user_id}/update_role")
	@Secured("ROLE_ADMIN")
	public UserResponse updateRole(@PathVariable(value="user_id") long id, @RequestParam("role") Role role) {
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
		user.setRole(role);
		return new UserResponse(userRepository.save(user));
	}
	
    @PostMapping("/photo_upload")
    public UserResponse SongFileUpload(@RequestParam("media_file") MultipartFile file, @CurrentUser UserPrincipal currentUser) {

    	User user = userRepository.findById(currentUser.getId()).orElseThrow(() -> new ResourceNotFoundException("User", "id", currentUser));

        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        filename = filename.replaceAll("\\s+","");
        filename = String.format("users/%d_%s",user.getId(), filename);
        amazonS3ClientService.uploadFileToS3Bucket(file, filename, true);
        user.setProfilePhoto(this.s3url+filename);
        user = userRepository.save(user);

        return new UserResponse(user);
    }
    
	@PostMapping("/{user_id}/update_status")
	@Secured("ROLE_ADMIN")
	public UserResponse updateStatus(@PathVariable(value="user_id") long id, @RequestParam("status") UserStatus status) {
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
		user.setStatus(status);
		return new UserResponse(userRepository.save(user));
	}
}
