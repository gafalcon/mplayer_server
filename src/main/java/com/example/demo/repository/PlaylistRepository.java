package com.example.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Playlist;

@Repository
public interface PlaylistRepository extends CrudRepository<Playlist, Long>{

	List<Playlist> findAllByCreatedBy(Long userId);
}
