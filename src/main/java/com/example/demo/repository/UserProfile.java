package com.example.demo.repository;

import com.example.demo.enums.UserStatus;

public interface UserProfile {
    String getId();
    String getUsername();
    String getFirstName();
    String getLastName();
    String getEmail();
    String getRole();
    UserStatus getStatus();
}
