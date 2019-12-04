package com.example.demo.repository;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Album;

@Repository
public interface AlbumRepository extends CrudRepository<Album, Long>{

	List<Album> findAllByCreatedBy(Long userId);
	
	List<Album> findAllByOrderByTotalReproductionsDesc(Pageable pageable);
	List<Album> findAllByOrderByTotalLikesDesc(Pageable pageable);
	List<Album> findAllByOrderByCreatedAtDesc(Pageable pageable);
	
	List<Album> findByCreatedByOrderByTotalReproductionsDesc(@Param("createdBy") Long userId, Pageable pageable);

	default List<Album> findTop10ByCreatedByOrderByTotalReproductionsDesc(Long userId) {
		return findByCreatedByOrderByTotalReproductionsDesc(userId, PageRequest.of(0,10));
	}	
}
