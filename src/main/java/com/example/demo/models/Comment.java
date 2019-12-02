package com.example.demo.models;

import java.time.Instant;

public class Comment {
	private String comment;
	private Long id;
	private String username;
	private Long createdBy;
	private Instant createdAt;
    private String userPhoto;
    
	public Comment(Long id, String comment, String username, Long createdBy, Instant createdAt, String userPhoto) {
		this.id = id;
		this.comment = comment;
		this.username = username;
		this.createdBy = createdBy;
		this.createdAt = createdAt;
		this.setUserPhoto(userPhoto);
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Long getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(Long createdBy) {
		this.createdBy = createdBy;
	}
	public Instant getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Instant createdAt) {
		this.createdAt = createdAt;
	}
	public String getUserPhoto() {
		return userPhoto;
	}
	public void setUserPhoto(String userPhoto) {
		this.userPhoto = userPhoto;
	}
	
	

}
