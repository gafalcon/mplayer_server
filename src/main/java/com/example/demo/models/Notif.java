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

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.example.demo.enums.NotifStatus;
import com.example.demo.enums.NotifType;
import com.example.demo.models.audit.UserDateAudit;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "notifs")
public class Notif extends UserDateAudit {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	
    @Enumerated(EnumType.STRING)
    @Column(length = 60)
	NotifStatus status;

    @Enumerated(EnumType.STRING)
    @Column(length = 60)
    NotifType notifType;
    
    
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "receiver_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
	private User receiver;
	
	private String extra;

	public Notif() {}

	public Notif(Long id, NotifStatus status, NotifType notifType, User receiver, String extra) {
		this.id = id;
		this.status = status;
		this.notifType = notifType;
		this.receiver = receiver;
		this.extra = extra;
	}

	public Notif(NotifType notifType, User receiver, String extra) {
		this.notifType = notifType;
		this.receiver = receiver;
		this.extra = extra;
		this.status = NotifStatus.UNREAD;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public NotifStatus getStatus() {
		return status;
	}

	public void setStatus(NotifStatus status) {
		this.status = status;
	}

	public NotifType getNotifType() {
		return notifType;
	}

	public void setNotifType(NotifType notifType) {
		this.notifType = notifType;
	}

	public User getReceiver() {
		return receiver;
	}

	public void setReceiver(User receiver) {
		this.receiver = receiver;
	}

	public String getExtra() {
		return extra;
	}

	public void setExtra(String extra) {
		this.extra = extra;
	}
	
	
}
