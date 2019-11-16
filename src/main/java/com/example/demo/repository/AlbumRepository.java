package com.example.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Album;

@Repository
public interface AlbumRepository extends CrudRepository<Album, Long>{

	List<Album> findAllByCreatedBy(Long userId);
}
