package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.models.User;
import com.example.demo.payloads.UserResponse;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{
	
    Optional<User> findByEmail(String email);

    Optional<User> findByUsernameOrEmail(String username, String email);

    List<User> findByIdIn(List<Long> userIds);

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    @Query("SELECT r.username FROM User r where r.id = :id")  
    Optional<UserResponse> findUserById(@Param("id") Long id);
    
    List<UserProfile> findAllBy();
}
