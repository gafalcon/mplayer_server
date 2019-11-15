package com.example.demo.controllers;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.models.Album;
import com.example.demo.models.AlbumDislike;
import com.example.demo.models.AlbumLike;
import com.example.demo.models.Song;
import com.example.demo.models.SongDislike;
import com.example.demo.models.SongLike;
import com.example.demo.payloads.ApiResponse;
import com.example.demo.repository.AlbumDislikeRepository;
import com.example.demo.repository.AlbumLikeRepository;
import com.example.demo.repository.SongDislikeRepository;
import com.example.demo.repository.SongLikeRepository;
import com.example.demo.security.CurrentUser;
import com.example.demo.security.UserPrincipal;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api")
public class LikesController {

	@Autowired
	private SongLikeRepository songLikeRepo;
	
	@Autowired
	private SongDislikeRepository songDislikeRepo;

	@Autowired
	private AlbumDislikeRepository albumDislikeRepo;
	
	@Autowired
	private AlbumLikeRepository albumLikeRepo;

	@PersistenceContext
	private EntityManager entityManager;

	@Secured({"ROLE_USER", "ROLE_ADMIN"})
	@GetMapping("/likes/albums")
	public List<Album> getLikedAlbums(@CurrentUser UserPrincipal user){
		List<AlbumLike> likes = albumLikeRepo.findAllByCreatedBy(user.getId());
		System.out.println("Num of liked albums" + likes.size());
		List<Album> likedAlbums = likes.stream().map(like -> like.getAlbum()).collect(Collectors.toList());
		System.out.println(likedAlbums);
		return likedAlbums;
	}

	@Secured({"ROLE_USER", "ROLE_ADMIN"})
	@GetMapping("/likes/songs")
	public List<Song> getLikedSongs(@CurrentUser UserPrincipal user){
		List<SongLike> likes = songLikeRepo.findAllByCreatedBy(user.getId());
		List<Song> likedSongs = likes.stream().map(like -> like.getSong()).collect(Collectors.toList());
		return likedSongs;
	}

	@PostMapping("/albums/{album_id}/like")
	public ApiResponse likeAlbum(@PathVariable("album_id") Long album_id, @CurrentUser UserPrincipal user) {
		Album album = entityManager.getReference(Album.class, album_id); // session.load() for native Session API  
		if (albumLikeRepo.existsByCreatedByAndAlbum(user.getId(), album)) {
			return new ApiResponse(false, "album already liked");
		}
		AlbumLike like = new AlbumLike();
		like.setAlbum(album);
		albumLikeRepo.save(like);
		return new ApiResponse(true, "liked album");
	}

	@PostMapping("/albums/{album_id}/dislike")
	public ApiResponse dislikeAlbum(@PathVariable("album_id") Long album_id, @CurrentUser UserPrincipal user) {
		Album album = entityManager.getReference(Album.class, album_id);
		if (albumDislikeRepo.existsByCreatedByAndAlbum(user.getId(), album)) {
			return new ApiResponse(false, "album already disliked");
		}
		AlbumDislike dislike = new AlbumDislike();
		dislike.setAlbum(album);
		albumDislikeRepo.save(dislike);
		return new ApiResponse(true, "disliked album");
	}

	@PostMapping("/song/{song_id}/like")
	public ApiResponse likeSong(@PathVariable("song_id") Long song_id, @CurrentUser UserPrincipal user) {
		Song song = entityManager.getReference(Song.class, song_id); // session.load() for native Session API  
		if (songLikeRepo.existsByCreatedByAndSong(user.getId(), song)) {
			return new ApiResponse(false, "song already liked");
		}
		SongLike like = new SongLike();
		like.setSong(song);
		songLikeRepo.save(like);
		return new ApiResponse(true, "liked song");
	}

	@PostMapping("/song/{song_id}/dislike")
	public ApiResponse dislikeSong(@PathVariable("song_id") Long song_id, @CurrentUser UserPrincipal user) {
		Song song = entityManager.getReference(Song.class, song_id); // session.load() for native Session API  
		if (songDislikeRepo.existsByCreatedByAndSong(user.getId(), song)) {
			return new ApiResponse(false, "song already disliked");
		}
		SongDislike dislike = new SongDislike();
		dislike.setSong(song);
		songDislikeRepo.save(dislike);
		return new ApiResponse(true, "disliked song");
	}

	@DeleteMapping("/albums/{album_id}/like")
	public ApiResponse deleteAlbumLike(@PathVariable("album_id") Long album_id, @CurrentUser UserPrincipal user) {
		Album album = entityManager.getReference(Album.class, album_id); // session.load() for native Session API  
		AlbumLike like = albumLikeRepo.findByCreatedByAndAlbum(user.getId(), album).orElseThrow(() -> new ResourceNotFoundException("AlbumLike", "album_id", album_id));
		albumLikeRepo.delete(like);
		return new ApiResponse(true, "deleted album like");
	}

	@DeleteMapping("/albums/{album_id}/dislike")
	public ApiResponse deleteAlbumDislike(@PathVariable("album_id") Long album_id, @CurrentUser UserPrincipal user) {
		Album album = entityManager.getReference(Album.class, album_id); // session.load() for native Session API  
		AlbumDislike dislike = albumDislikeRepo.findByCreatedByAndAlbum(user.getId(), album).orElseThrow(() -> new ResourceNotFoundException("Album Dislike", "album_id", album_id));
		albumDislikeRepo.delete(dislike);
		return new ApiResponse(true, "deleted album dislike");
	}

	@DeleteMapping("/song/{song_id}/like")
	public ApiResponse deleteSongLike(@PathVariable("song_id") Long song_id, @CurrentUser UserPrincipal user) {
		Song song = entityManager.getReference(Song.class, song_id); // session.load() for native Session API  
		SongLike like = songLikeRepo.findByCreatedByAndSong(user.getId(), song).orElseThrow(() -> new ResourceNotFoundException("Song Like", "song_id", song_id));
		songLikeRepo.delete(like);
		return new ApiResponse(true, "deleted album like");
	}
	
	
	@DeleteMapping("/song/{song_id}/dislike")
	public ApiResponse deleteSongDislike(@PathVariable("song_id") Long song_id, @CurrentUser UserPrincipal user) {
		Song song = entityManager.getReference(Song.class, song_id); // session.load() for native Session API  
		SongDislike dislike = songDislikeRepo.findByCreatedByAndSong(user.getId(), song).orElseThrow(() -> new ResourceNotFoundException("Song Dislike", "song_id", song_id));
		songDislikeRepo.delete(dislike);
		return new ApiResponse(true, "deleted song dislike");
	}
	
	@Secured({"ROLE_USER", "ROLE_ADMIN"})
	@GetMapping("/song/{song_id}/is_liked_disliked")
	public ApiResponse isSongLikedOrDisliked(@PathVariable("song_id") Long song_id, @CurrentUser UserPrincipal user) {
		Song song = entityManager.getReference(Song.class, song_id);
		if (songLikeRepo.existsByCreatedByAndSong(user.getId(), song)) {
			return new ApiResponse(true, "liked");
		}else if (songDislikeRepo.existsByCreatedByAndSong(user.getId(), song)) {
			return new ApiResponse(true, "disliked");
		}
		return new ApiResponse(false, "no likes ni dislikes");
	}

	@Secured({"ROLE_USER", "ROLE_ADMIN"})
	@GetMapping("/albums/{album_id}/is_liked_disliked")
	public ApiResponse isAlbumLikedOrDisliked(@PathVariable("album_id") Long album_id, @CurrentUser UserPrincipal user) {
		Album album = entityManager.getReference(Album.class, album_id);
		if (albumLikeRepo.existsByCreatedByAndAlbum(user.getId(), album)) {
			return new ApiResponse(true, "liked");
		}else if (albumDislikeRepo.existsByCreatedByAndAlbum(user.getId(), album)) {
			return new ApiResponse(true, "disliked");
		}
		return new ApiResponse(false, "no likes ni dislikes");
	}
	
}
