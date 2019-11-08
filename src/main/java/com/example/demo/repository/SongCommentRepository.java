package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.SongComment;

@Repository
public interface SongCommentRepository  extends CrudRepository<SongComment, Long>{

}
