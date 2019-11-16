package com.example.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.example.demo.enums.MessageStatus;
import com.example.demo.models.audit.DateAudit;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "messages")
public class Message extends DateAudit{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	@NotBlank
	String message;
	
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "sender_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
	private User sender;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "receiver_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
	private User receiver;
	
	
    @Enumerated(EnumType.STRING)
    @Column(length = 60)
	MessageStatus status;

    public Message() {
    	
    }

	public Message(Long id, String message, User sender, User receiver, MessageStatus status) {
		this.id = id;
		this.message = message;
		this.sender = sender;
		this.receiver = receiver;
		this.status = status;
	}


	public Message(String message, User sender, User receiver) {
		this.message = message;
		this.sender = sender;
		this.receiver = receiver;
		this.status = MessageStatus.UNREAD;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}


	public User getSender() {
		return sender;
	}


	public void setSender(User sender) {
		this.sender = sender;
	}


	public User getReceiver() {
		return receiver;
	}


	public void setReceiver(User receiver) {
		this.receiver = receiver;
	}


	public MessageStatus getStatus() {
		return status;
	}


	public void setStatus(MessageStatus status) {
		this.status = status;
	}
    
    
}
