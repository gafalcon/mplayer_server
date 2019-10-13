package com.example.demo.security;

public enum Role {
	ROLE_USER,
	ROLE_ADMIN;
	
	   public String toString(){
	        switch (this) {
	            case ROLE_USER: return "USER";
	            case ROLE_ADMIN: return "ADMIN";
	        }
	        return null;
	    }

}
