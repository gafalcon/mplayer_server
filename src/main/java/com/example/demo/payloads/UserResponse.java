package com.example.demo.payloads;

import com.example.demo.models.User;
import com.example.demo.security.Role;

public class UserResponse {
	private Long id;
	private String firstName;
	private String lastName;
	private String username;
	private Role role;
	private String country;
	private String gender;
	private String profilePhoto;
	public UserResponse(Long id, String firstName, String lastName, String username, Role role, String country,
			String gender) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.role = role;
		this.country = country;
		this.gender = gender;
	}
	
	public UserResponse(User user) {
		this.id = user.getId();
		this.firstName = user.getFirstName();
		this.lastName = user.getLastName();
		this.role = user.getRole();
		this.country = user.getCountry();
		this.gender = user.getGender();
		this.setProfilePhoto(user.getProfilePhoto());
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getProfilePhoto() {
		return profilePhoto;
	}

	public void setProfilePhoto(String profilePhoto) {
		this.profilePhoto = profilePhoto;
	}
	
	
}
