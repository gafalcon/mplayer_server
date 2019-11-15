package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Album;
import com.example.demo.models.AlbumLike;

@Repository
public interface AlbumLikeRepository  extends CrudRepository<AlbumLike, Long>{

	Optional<AlbumLike> findByCreatedByAndAlbum(Long createdBy, Album album);
	
	List<AlbumLike> findAllByCreatedBy(Long createdBy);
	
	boolean existsByCreatedByAndAlbum(Long createdBy, Album album);
}
