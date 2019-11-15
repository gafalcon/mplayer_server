package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Song;
import com.example.demo.models.SongLike;

@Repository
public interface SongLikeRepository  extends CrudRepository<SongLike, Long>{

	Optional<SongLike> findByCreatedByAndSong(Long createdBy, Song song);
	
	boolean existsByCreatedByAndSong(Long createdBy, Song song);
	
	List<SongLike> findAllByCreatedBy(Long createdBy);
}
