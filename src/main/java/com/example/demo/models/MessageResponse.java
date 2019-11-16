package com.example.demo.models;

import java.time.Instant;

import com.example.demo.enums.MessageStatus;

public class MessageResponse {
	Long id;
	String sender;
	String receiver;
	Long sender_id;
	Long receiver_id;
	String message;
	Instant createdAt;
	MessageStatus status;
	public MessageResponse(Long id, String sender, String receiver, Long sender_id, Long receiver_id, String message,
			Instant createdAt, MessageStatus status) {
		this.id = id;
		this.sender = sender;
		this.receiver = receiver;
		this.sender_id = sender_id;
		this.receiver_id = receiver_id;
		this.message = message;
		this.createdAt = createdAt;
		this.status = status;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getSender() {
		return sender;
	}
	public void setSender(String sender) {
		this.sender = sender;
	}
	public String getReceiver() {
		return receiver;
	}
	public void setReceiver(String receiver) {
		this.receiver = receiver;
	}
	public Long getSender_id() {
		return sender_id;
	}
	public void setSender_id(Long sender_id) {
		this.sender_id = sender_id;
	}
	public Long getReceiver_id() {
		return receiver_id;
	}
	public void setReceiver_id(Long receiver_id) {
		this.receiver_id = receiver_id;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Instant getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Instant createdAt) {
		this.createdAt = createdAt;
	}
	public MessageStatus getStatus() {
		return status;
	}
	public void setStatus(MessageStatus status) {
		this.status = status;
	}
	
	
}
