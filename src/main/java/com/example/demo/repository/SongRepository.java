package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Song;
import com.example.demo.payloads.SongComplete;

@Repository
public interface SongRepository extends CrudRepository<Song, Long>{

	List<Song> findAllByOrderByTotalReproductionsDesc(Pageable pageable);
	List<Song> findAllByOrderByTotalLikesDesc(Pageable pageable);
	
    @Query("SELECT NEW com.example.demo.payloads.SongComplete(s.id, s.name, s.album.name, s.artist, s.url, s.cover_art_url, s.genres, s.lyrics, s.album.id, s.totalLikes, s.totalDislikes, s.totalReproductions) FROM Song s WHERE s.id = :songId")
    Optional<SongComplete> findSongCompleteById(@Param("songId") Long songId);

	List<ModelName>findByNameIgnoreCaseContaining(String name); 
}
