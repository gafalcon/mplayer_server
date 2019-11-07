package com.example.demo.models;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.annotations.NaturalId;

import com.example.demo.enums.UserStatus;
import com.example.demo.models.audit.DateAudit;
import com.example.demo.security.Role;

@Entity
@Table(name = "users", uniqueConstraints = {
		@UniqueConstraint(columnNames = {
				"username"
		}),
		@UniqueConstraint(columnNames = {
				"email"
		})
})
public class User extends DateAudit {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Size(max = 40)
	private String firstName;
	
	@NotBlank
	@Size(max = 40)
	private String lastName;

	@NotBlank
	@Size(max = 15)
	private String username;

    @NaturalId
    @NotBlank
    @Size(max = 40)
    @Email
	private String email;
    
    @NotBlank
    @Size(max = 100)
    private String password;
    
    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(length = 60)
    private Role role;
    
    private String country;
    
    private String gender;
    
    @Enumerated(EnumType.STRING)
    private UserStatus status;

	public User() {
		
	}

	public User(String firstName, String lastName, String username, String email, String password, Role role, String country, String gender) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.role = role;
		this.password = password;
		this.username = username;
		this.country = country;
		this.gender = gender;
	}
	
	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + firstName + ", email=" + email + "]";
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
	public String getEmail() {
		return email;
		
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String passwd) {
		this.password = passwd;
	}
	public void setFirstName(String name) {
		this.firstName = name;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
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
	
	
}
