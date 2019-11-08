package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.SongLike;

@Repository
public interface SongLikeRepository  extends CrudRepository<SongLike, Long>{

}
