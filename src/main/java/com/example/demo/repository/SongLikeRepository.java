package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Song;
import com.example.demo.models.SongLike;
import com.example.demo.models.SongSummary;

@Repository
public interface SongLikeRepository  extends CrudRepository<SongLike, Long>{

	Optional<SongLike> findByCreatedByAndSong(Long createdBy, Song song);
	
	boolean existsByCreatedByAndSong(Long createdBy, Song song);
	
	List<SongLike> findAllByCreatedBy(Long createdBy);
	
	long countBySong(Song song);

    @Query("SELECT NEW com.example.demo.models.SongSummary(s.song.id, s.song.name, s.song.album.name, s.song.album.id) FROM SongLike s WHERE s.createdBy = :createdBy")
    List<SongSummary> findLikedSongs(@Param("createdBy") Long createdBy);
}
