package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Album;

@Repository
public interface AlbumRepository extends CrudRepository<Album, Long>{

}
