package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Song;
import com.example.demo.models.SongDislike;

@Repository
public interface SongDislikeRepository  extends CrudRepository<SongDislike, Long>{

	Optional<SongDislike> findByCreatedByAndSong(Long createdBy, Song song);
	
	long countBySong(Song song);

	boolean existsByCreatedByAndSong(Long createdBy, Song song);
}
