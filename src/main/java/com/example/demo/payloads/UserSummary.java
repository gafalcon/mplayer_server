package com.example.demo.payloads;

import com.example.demo.security.Role;

public class UserSummary {
	
	private String username;
	private Long id;
	private Role role;
	private String profilePhoto;
	
	public UserSummary(Long id, String username, Role role, String profilePhoto) {
		this.username = username;
		this.id = id;
		this.role = role;
		this.profilePhoto = profilePhoto;
	}

	public String getProfilePhoto() {
		return profilePhoto;
	}

	public void setProfilePhoto(String profilePhoto) {
		this.profilePhoto = profilePhoto;
	}

	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}

	
}
