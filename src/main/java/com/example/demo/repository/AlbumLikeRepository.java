package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Album;
import com.example.demo.models.AlbumLike;
import com.example.demo.models.AlbumSummary;

@Repository
public interface AlbumLikeRepository  extends CrudRepository<AlbumLike, Long>{

	Optional<AlbumLike> findByCreatedByAndAlbum(Long createdBy, Album album);
	
	long countByAlbum(Album album);

	List<AlbumLike> findAllByCreatedBy(Long createdBy);
	
    @Query("SELECT NEW com.example.demo.models.AlbumSummary(a.album.id, a.album.name, a.album.cover_art_url) FROM AlbumLike a WHERE a.createdBy = :createdBy")
    List<AlbumSummary> findLikedAlbums(@Param("createdBy") Long createdBy);

	boolean existsByCreatedByAndAlbum(Long createdBy, Album album);
}
