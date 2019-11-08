package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.AlbumDislike;

@Repository
public interface AlbumDislikeRepository  extends CrudRepository<AlbumDislike, Long>{

}
