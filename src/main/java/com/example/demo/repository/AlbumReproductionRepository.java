package com.example.demo.repository;


import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Album;
import com.example.demo.models.AlbumReproduction;

@Repository
public interface AlbumReproductionRepository extends CrudRepository<AlbumReproduction, Long>{
	
	long countByAlbum(Album album);

	List<Album> findAlbumByCreatedByOrderByCreatedAtDesc(Long createdBy, Pageable pageable);
}
