package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Album;
import com.example.demo.models.AlbumDislike;

@Repository
public interface AlbumDislikeRepository  extends CrudRepository<AlbumDislike, Long>{

	Optional<AlbumDislike> findByCreatedByAndAlbum(Long createdBy, Album album);
	
	boolean existsByCreatedByAndAlbum(Long createdBy, Album album);
}
