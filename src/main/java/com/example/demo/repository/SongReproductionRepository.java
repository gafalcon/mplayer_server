package com.example.demo.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Song;
import com.example.demo.models.SongReproduction;

@Repository
public interface SongReproductionRepository extends CrudRepository<SongReproduction,Long> {

	long countBySong(Song song);
	
    @Query("SELECT s.song FROM SongReproduction s WHERE s.createdBy = :createdBy ORDER BY s.createdAt DESC")
	List<Song> findSongByCreatedByOrderByCreatedAtDesc(@Param("createdBy") Long createdBy, Pageable pageable);
}

