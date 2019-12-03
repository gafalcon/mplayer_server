package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.models.Genre;
import com.example.demo.repository.GenreName;
import com.example.demo.repository.GenreRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/genres")
public class GenreController {

	@Autowired
	private GenreRepository genre_repo;

	@GetMapping("")
	List<GenreName> getGenres(){
		return genre_repo.findAllBy();
	}
	
	@GetMapping("/{genre_name}")
	Genre findGenrebyName(@PathVariable(value="genre_name") String genre) {
		return genre_repo.findByGenre(genre).orElseThrow(() -> new ResponseStatusException(
					HttpStatus.NOT_FOUND, "genre not found"
				));
	}
}
