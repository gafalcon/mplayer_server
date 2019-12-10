package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.ProfessionalRequest;
import com.example.demo.models.User;
import com.example.demo.payloads.RoleRequest;

@Repository
public interface ProfessionalRequestRepository extends CrudRepository<ProfessionalRequest, Long>{

	List<ProfessionalRequest> findByUser(User user);
	
	@Query("SELECT NEW com.example.demo.payloads.RoleRequest(r.id, r.user.id, r.user.username, r.createdAt) FROM ProfessionalRequest r")
	List<RoleRequest> findAllRequests();
	
	@Override
	List<ProfessionalRequest> findAll();
	
}
