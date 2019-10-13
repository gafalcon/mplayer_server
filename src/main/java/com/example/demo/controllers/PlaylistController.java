package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.models.Playlist;
import com.example.demo.repository.PlaylistRepository;

@RestController
@RequestMapping("/api/playlists")
public class PlaylistController {

	@Autowired
	PlaylistRepository plrepo;

	@GetMapping("")
	public List<Playlist> getPlaylists(){
		return (List <Playlist>) plrepo.findAll();
	}

	@GetMapping("/{id}")
	public Playlist getPlaylist(@PathVariable(value="id") Long pl_id){
		return plrepo.findById(pl_id).orElseThrow(() -> new ResponseStatusException(
				  HttpStatus.NOT_FOUND, "playlist not found"
				));
	}
}
