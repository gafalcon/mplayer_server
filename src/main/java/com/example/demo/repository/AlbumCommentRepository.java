package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.AlbumComment;

@Repository
public interface AlbumCommentRepository  extends CrudRepository<AlbumComment, Long>{

}
