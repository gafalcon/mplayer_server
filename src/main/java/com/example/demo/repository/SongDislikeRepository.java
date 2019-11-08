package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.SongDislike;

@Repository
public interface SongDislikeRepository  extends CrudRepository<SongDislike, Long>{

}
