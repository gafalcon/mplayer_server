package com.example.demo.controllers;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Album;
import com.example.demo.models.AlbumLike;
import com.example.demo.payloads.ApiResponse;
import com.example.demo.repository.AlbumLikeRepository;
import com.example.demo.repository.AlbumRepository;
import com.example.demo.repository.SongLikeRepository;
import com.example.demo.security.CurrentUser;
import com.example.demo.security.UserPrincipal;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/likes")
public class LikesController {

	@Autowired
	private SongLikeRepository songLikeRepo;
	
	@Autowired
	private AlbumLikeRepository albumLikeRepo;
	
	@Autowired
	private AlbumRepository albumRepo;
	
	@PersistenceContext
	private EntityManager entityManager;

	@PostMapping("/album/{album_id}")
	public ApiResponse likeAlbum(@PathVariable("album_id") Long album_id, @CurrentUser UserPrincipal user) {
		Album album = entityManager.getReference(Album.class, album_id); // session.load() for native Session API  
		//Album album = albumRepo.findById(album_id).orElseThrow();
		AlbumLike like = new AlbumLike();
		like.setAlbum(album);
		albumLikeRepo.save(like);
		return new ApiResponse(true, "liked album");
	}
}
