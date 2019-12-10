package com.example.demo.payloads;

import java.time.Instant;

public class RoleRequest {
	Long id;
	Long user_id;
	String username;
    private Instant createdAt;

	public RoleRequest() {
	}

	public RoleRequest(Long id, Long user_id, String username, Instant createdAt) {
		this.id = id;
		this.user_id = user_id;
		this.username = username;
		this.createdAt = createdAt;
	}

	public Instant getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Instant createdAt) {
		this.createdAt = createdAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	
}
