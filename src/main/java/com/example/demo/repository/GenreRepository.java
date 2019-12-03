package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Genre;

@Repository
public interface GenreRepository  extends CrudRepository<Genre, Long>{

    List<GenreName> findAllBy();

    Boolean existsByGenre(String genre);

    Optional<Genre> findByGenre(String genre);
}
