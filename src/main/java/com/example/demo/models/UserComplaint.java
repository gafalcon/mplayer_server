package com.example.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.NaturalId;

import com.example.demo.enums.ComplaintStatus;
import com.example.demo.models.audit.UserDateAudit;

@Entity
@Table(name = "user_complaints")
public class UserComplaint extends UserDateAudit{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank
	String comment;
	
    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(length = 60)
	ComplaintStatus status;

	public UserComplaint(long id, String comment, ComplaintStatus status) {
		this.id = id;
		this.comment = comment;
		this.status = status;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public ComplaintStatus getStatus() {
		return status;
	}

	public void setStatus(ComplaintStatus status) {
		this.status = status;
	}
	
	
}
