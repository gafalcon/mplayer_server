package com.example.demo.payloads;

public class MessageRequest {
	
	private Long sender_id;
	private Long receiver_id;
	private String message;
	public MessageRequest(Long sender_id, Long receiver_id, String message) {
		this.sender_id = sender_id;
		this.receiver_id = receiver_id;
		this.message = message;
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
	
	
}
