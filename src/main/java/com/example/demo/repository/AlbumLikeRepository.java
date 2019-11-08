package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.AlbumLike;

@Repository
public interface AlbumLikeRepository  extends CrudRepository<AlbumLike, Long>{

}
