package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.UserComplaint;

@Repository
public interface UserComplaintRepository  extends CrudRepository<UserComplaint, Long>{

}
