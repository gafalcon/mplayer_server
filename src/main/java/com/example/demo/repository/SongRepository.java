package com.example.demo.repository;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Song;

@Repository
public interface SongRepository extends CrudRepository<Song, Long>{

	List<Song> findAllByOrderByTotalReproductionsDesc(Pageable pageable);
	List<Song> findAllByOrderByTotalLikesDesc(Pageable pageable);
	
}
