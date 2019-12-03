package com.example.demo.controllers;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.models.Album;
import com.example.demo.models.AlbumReproduction;
import com.example.demo.models.AlbumSummary;
import com.example.demo.models.Song;
import com.example.demo.models.SongReproduction;
import com.example.demo.models.SongSummary;
import com.example.demo.payloads.ApiResponse;
import com.example.demo.repository.AlbumRepository;
import com.example.demo.repository.AlbumReproductionRepository;
import com.example.demo.repository.SongRepository;
import com.example.demo.repository.SongReproductionRepository;
import com.example.demo.security.CurrentUser;
import com.example.demo.security.UserPrincipal;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api")
public class ReproductionController {

	@Autowired
	private SongReproductionRepository sr_repo;
	
	@Autowired
	private AlbumReproductionRepository ar_repo;
	
	@Autowired
	private AlbumRepository albumRepo;
	
	@Autowired
	private SongRepository songRepo;

	@PersistenceContext
	private EntityManager entityManager;
	
	
	@PostMapping("/albums/{album_id}/repr")
	public ApiResponse albumRepr(@PathVariable("album_id") Long album_id, @CurrentUser UserPrincipal user) {
		System.out.println("Album like");
		Album album = entityManager.getReference(Album.class, album_id); // session.load() for native Session API  

		AlbumReproduction ar = new AlbumReproduction();
		ar.setAlbum(album);
		ar_repo.save(ar);
		return new ApiResponse(true, "added to reproduced");
	}
	
	
	@PostMapping("/songs/{song_id}/repr")
	public ApiResponse songRepr(@PathVariable("song_id") Long song_id, @CurrentUser UserPrincipal user) {
		System.out.println("Album like");
		Song song = entityManager.getReference(Song.class, song_id); // session.load() for native Session API  

		SongReproduction sr = new SongReproduction();
		sr.setSong(song);
		sr_repo.save(sr);
		return new ApiResponse(true, "added to reproduced");
	}
	
	
	
	@Secured({"ROLE_ADMIN"})
	@PutMapping("/albums/reprs/update")
	public ApiResponse updateTotalReprs() {
		List<Album> updatedAlbums = new ArrayList<Album>();
		albumRepo.findAll().forEach((album) -> {
			long totalReps = ar_repo.countByAlbum(album);
			if ((totalReps) > 0) {
				System.out.println(String.format("%s - reps: %d", album.getName(), totalReps));
			}
			album.setTotalReproductions(totalReps);
			updatedAlbums.add(album);
		}); 
		
		albumRepo.saveAll(updatedAlbums);
		return new ApiResponse(true, "Albums updated");
	}
	
	
	
	@Secured({"ROLE_ADMIN"})
	@PutMapping("/songs/reprs/update")
	public ApiResponse updateSongTotalReprs() {
		List<Song> updatedSongs = new ArrayList<Song>();
		songRepo.findAll().forEach((song) -> {
			long totalReps = sr_repo.countBySong(song);
			if ((totalReps) > 0) {
				System.out.println(String.format("%s - reps: %d", song.getName(), totalReps));
			}
			song.setTotalReproductions(totalReps);
			updatedSongs.add(song);
		}); 
		
		songRepo.saveAll(updatedSongs);
		return new ApiResponse(true, "Songs updated");
	}
	
	
	@Secured({"ROLE_USER", "ROLE_ADMIN"})
	@GetMapping("/songs/reprs/recent") 
	public List<Song> getRecentReprSongs(@CurrentUser UserPrincipal user) {
		return sr_repo.findSongByCreatedByOrderByCreatedAtDesc(user.getId(), PageRequest.of(0, 10));
	}
	
	@Secured({"ROLE_USER", "ROLE_ADMIN"})
	@GetMapping("/albums/reprs/recent") 
	public List<Album> getRecentReprAlbums(@CurrentUser UserPrincipal user) {
		return ar_repo.findAlbumByCreatedByOrderByCreatedAtDesc(user.getId(), PageRequest.of(0, 10));
	}
	
	@GetMapping("/songs/reprs/most") 
	public List<Song> getMostReprSongs() {
		return songRepo.findAllByOrderByTotalReproductionsDesc(PageRequest.of(0, 50));
	}
	
	
	@GetMapping("/albums/reprs/most") 
	public List<Album> getMostReprAlbums() {
		return albumRepo.findAllByOrderByTotalReproductionsDesc(PageRequest.of(0, 10));
	}
	
	
	
	
	
	
}
