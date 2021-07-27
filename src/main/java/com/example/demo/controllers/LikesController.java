package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
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
import com.example.demo.models.AlbumDislike;
import com.example.demo.models.AlbumLike;
import com.example.demo.models.AlbumSummary;
import com.example.demo.models.Song;
import com.example.demo.models.SongDislike;
import com.example.demo.models.SongLike;
import com.example.demo.models.SongSummary;
import com.example.demo.payloads.ApiResponse;
import com.example.demo.repository.AlbumDislikeRepository;
import com.example.demo.repository.AlbumLikeRepository;
import com.example.demo.repository.AlbumRepository;
import com.example.demo.repository.SongDislikeRepository;
import com.example.demo.repository.SongLikeRepository;
import com.example.demo.repository.SongRepository;
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
	
	@Autowired
	private AlbumRepository albumRepo;
	
	@Autowired
	private SongRepository songRepo;

	@PersistenceContext
	private EntityManager entityManager;

	@Secured({"ROLE_USER", "ROLE_ADMIN"})
	@GetMapping("/likes/albums")
	public List<AlbumSummary> getLikedAlbums(@CurrentUser UserPrincipal user){
		List<AlbumSummary> likedAlbums = albumLikeRepo.findLikedAlbums(user.getId());
		return likedAlbums;
	}

	@Secured({"ROLE_USER", "ROLE_ADMIN"})
	@GetMapping("/likes/songs")
	public List<SongSummary> getLikedSongs(@CurrentUser UserPrincipal user){
		List<SongSummary> likedSongs = songLikeRepo.findLikedSongs(user.getId());
		return likedSongs;
	}

	@PostMapping("/albums/{album_id}/like")
	public ApiResponse likeAlbum(@PathVariable("album_id") Long album_id, @CurrentUser UserPrincipal user) {
    Album album = albumRepo.findById(album_id).orElseThrow(() -> new ResponseStatusException(
                                                                                             HttpStatus.NOT_FOUND, "album not found"
                                                                                             ));
		// Album album = entityManager.getReference(Album.class, album_id); // session.load() for native Session API  
		if (albumLikeRepo.existsByCreatedByAndAlbum(user.getId(), album)) {
			return new ApiResponse(false, "album already liked");
		}
    if (albumDislikeRepo.existsByCreatedByAndAlbum(user.getId(), album)){
        deleteAlbumDislike(user.getId(), album);
    }
		AlbumLike like = new AlbumLike();
		like.setAlbum(album);
		albumLikeRepo.save(like);
    album.setTotalLikes(album.getTotalLikes() + 1);
    albumRepo.save(album);
		System.out.println(like);
		return new ApiResponse(true, "liked album");
	}

	@PostMapping("/albums/{album_id}/dislike")
	public ApiResponse dislikeAlbum(@PathVariable("album_id") Long album_id, @CurrentUser UserPrincipal user) {
      Album album = albumRepo.findById(album_id).orElseThrow(() -> new ResponseStatusException(
                                                                                               HttpStatus.NOT_FOUND, "album not found"
                                                                                               ));
		// Album album = entityManager.getReference(Album.class, album_id);
		if (albumDislikeRepo.existsByCreatedByAndAlbum(user.getId(), album)) {
			return new ApiResponse(false, "album already disliked");
		}
    if (albumLikeRepo.existsByCreatedByAndAlbum(user.getId(), album)) {
        deleteAlbumLike(user.getId(), album);
    }
		AlbumDislike dislike = new AlbumDislike();
		dislike.setAlbum(album);
		albumDislikeRepo.save(dislike);
    album.setTotalDislikes(album.getTotalDislikes() + 1);
    albumRepo.save(album);
		return new ApiResponse(true, "disliked album");
	}

	@PostMapping("/songs/{song_id}/like")
	public ApiResponse likeSong(@PathVariable("song_id") Long song_id, @CurrentUser UserPrincipal user) {
		// Song song = entityManager.getReference(Song.class, song_id); // session.load() for native Session API  
    Song song = songRepo.findById(song_id).orElseThrow(() -> new ResponseStatusException(
                                                                                         HttpStatus.NOT_FOUND, "song not found"
                                                                                         ));

		if (songLikeRepo.existsByCreatedByAndSong(user.getId(), song)) {
			return new ApiResponse(false, "song already liked");
		}
    if (songDislikeRepo.existsByCreatedByAndSong(user.getId(), song)){
        deleteSongDislike(user.getId(), song);
    }
		SongLike like = new SongLike();
		like.setSong(song);
		songLikeRepo.save(like);

    song.setTotalLikes(song.getTotalLikes() + 1);
    songRepo.save(song);
		return new ApiResponse(true, "liked song");
	}

	@PostMapping("/songs/{song_id}/dislike")
	public ApiResponse dislikeSong(@PathVariable("song_id") Long song_id, @CurrentUser UserPrincipal user) {
		// Song song = entityManager.getReference(Song.class, song_id); // session.load() for native Session API  
    Song song = songRepo.findById(song_id).orElseThrow(() -> new ResponseStatusException(
                                                                                         HttpStatus.NOT_FOUND, "song not found"
                                                                                         ));
		if (songDislikeRepo.existsByCreatedByAndSong(user.getId(), song)) {
			return new ApiResponse(false, "song already disliked");
		}
    if (songLikeRepo.existsByCreatedByAndSong(user.getId(), song)){ //If song is liked,delete like before creating dislike
            deleteSongLike(user.getId(), song);
    }
		SongDislike dislike = new SongDislike();

		dislike.setSong(song);
		songDislikeRepo.save(dislike);
    song.setTotalDislikes(song.getTotalDislikes() + 1);
    songRepo.save(song);
		return new ApiResponse(true, "disliked song");
	}

    public void deleteAlbumLike(Long userId, Album album){
        AlbumLike like = albumLikeRepo.findByCreatedByAndAlbum(userId, album).orElseThrow(() -> new ResourceNotFoundException("AlbumLike", "album_id", album.getId()));
        albumLikeRepo.delete(like);
        album.setTotalLikes(album.getTotalLikes() - 1);
        albumRepo.save(album);
    }

	@DeleteMapping("/albums/{album_id}/like")
	public ApiResponse deleteAlbumLike(@PathVariable("album_id") Long album_id, @CurrentUser UserPrincipal user) {
		// Album album = entityManager.getReference(Album.class, album_id); // session.load() for native Session API  

    Album album = albumRepo.findById(album_id).orElseThrow(() -> new ResponseStatusException(
                                                                                             HttpStatus.NOT_FOUND, "album not found"
                                                                                             ));
    deleteAlbumLike(user.getId(), album);
		return new ApiResponse(true, "deleted album like");
	}

    public void deleteAlbumDislike(Long userId, Album album){
        AlbumDislike dislike = albumDislikeRepo.findByCreatedByAndAlbum(userId, album).orElseThrow(() -> new ResourceNotFoundException("Album Dislike", "album_id", album.getId()));
        albumDislikeRepo.delete(dislike);

        album.setTotalDislikes(album.getTotalDislikes() - 1);
        albumRepo.save(album);
    }

	@DeleteMapping("/albums/{album_id}/dislike")
	public ApiResponse deleteAlbumDislike(@PathVariable("album_id") Long album_id, @CurrentUser UserPrincipal user) {
		// Album album = entityManager.getReference(Album.class, album_id); // session.load() for native Session API  

    Album album = albumRepo.findById(album_id).orElseThrow(() -> new ResponseStatusException(
                                                                                             HttpStatus.NOT_FOUND, "album not found"
                                                                                             ));
    deleteAlbumDislike(user.getId(), album);
		return new ApiResponse(true, "deleted album dislike");
	}

  public void deleteSongLike(Long userId, Song song){
      SongLike like = songLikeRepo.findByCreatedByAndSong(userId, song).orElseThrow(() -> new ResourceNotFoundException("Song Like", "song_id", song.getId()));
      songLikeRepo.delete(like);
      song.setTotalLikes(song.getTotalLikes() - 1);
      songRepo.save(song);
  }

   public void deleteSongDislike(Long userId, Song song){
       SongDislike dislike = songDislikeRepo.findByCreatedByAndSong(userId, song).orElseThrow(() -> new ResourceNotFoundException("Song Dislike", "song_id", song.getId()));
       songDislikeRepo.delete(dislike);
       song.setTotalDislikes(song.getTotalDislikes() - 1);
       songRepo.save(song);
    }
    
	@DeleteMapping("/songs/{song_id}/like")
	public ApiResponse deleteSongLike(@PathVariable("song_id") Long song_id, @CurrentUser UserPrincipal user) {
		// Song song = entityManager.getReference(Song.class, song_id); // session.load() for native Session API  
    Song song = songRepo.findById(song_id).orElseThrow(() -> new ResponseStatusException(
                                                                                         HttpStatus.NOT_FOUND, "song not found"
                                                                                         ));
    deleteSongLike(user.getId(), song);
		return new ApiResponse(true, "deleted album like");
	}
	
	
	@DeleteMapping("/songs/{song_id}/dislike")
	public ApiResponse deleteSongDislike(@PathVariable("song_id") Long song_id, @CurrentUser UserPrincipal user) {
		// Song song = entityManager.getReference(Song.class, song_id); // session.load() for native Session API  
    Song song = songRepo.findById(song_id).orElseThrow(() -> new ResponseStatusException(
                                                                                         HttpStatus.NOT_FOUND, "song not found"
                                                                                         ));

    deleteSongDislike(user.getId(), song);
		return new ApiResponse(true, "deleted song dislike");
	}
	
	@Secured({"ROLE_USER", "ROLE_ADMIN"})
	@GetMapping("/songs/{song_id}/is_liked_disliked")
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
	
	@Secured({"ROLE_ADMIN"})
	@PutMapping("/albums/likes/update")
	public ApiResponse updateTotalLikes() {
		List<Album> updatedAlbums = new ArrayList<Album>();
		albumRepo.findAll().forEach((album) -> {
			long totalLikes = albumLikeRepo.countByAlbum(album);
			long totalDislikes = albumLikeRepo.countByAlbum(album);
			if ((totalLikes + totalDislikes) > 0) {
				System.out.println(String.format("%s - likes: %d , dislikes: %d", album.getName(), totalLikes, totalDislikes));
			}
			album.setTotalDislikes(totalDislikes);
			album.setTotalLikes(totalLikes);
			updatedAlbums.add(album);
		}); 
		
		albumRepo.saveAll(updatedAlbums);
		return new ApiResponse(true, "Albums updated");
	}
	
	@Secured({"ROLE_ADMIN"})
	@PutMapping("/songs/likes/update")
	public ApiResponse updateTotalSongLikes() {
		List<Song> updatedSongs = new ArrayList<Song>();
		songRepo.findAll().forEach((song) -> {
			long totalLikes = songLikeRepo.countBySong(song);
			long totalDislikes = songLikeRepo.countBySong(song);
			if ((totalLikes + totalDislikes) > 0) {
				System.out.println(String.format("%s - likes: %d , dislikes: %d", song.getName(), totalLikes, totalDislikes));
			}
			song.setTotalDislikes(totalDislikes);
			song.setTotalLikes(totalLikes);
			// TODO only add if there was a change
			updatedSongs.add(song);
		}); 
		
		songRepo.saveAll(updatedSongs);
		return new ApiResponse(true, "Albums updated");
	}
	
	@GetMapping("/albums/likes/most")
	public List<Album> mostLikedAlbums(){
		return albumRepo.findAllByOrderByTotalLikesDesc(PageRequest.of(0, 10));
	}
	
	@GetMapping("/songs/likes/most")
	public List<Song> mostLikedSongs() {
		return songRepo.findAllByOrderByTotalLikesDesc(PageRequest.of(0, 10));
	}
}
