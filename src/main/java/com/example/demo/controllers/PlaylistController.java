package com.example.demo.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.models.Playlist;
import com.example.demo.models.Song;
import com.example.demo.payloads.ApiResponse;
import com.example.demo.payloads.PlaylistRequest;
import com.example.demo.repository.ModelName;
import com.example.demo.repository.PlaylistRepository;
import com.example.demo.repository.SongRepository;

@RestController
@RequestMapping("/api/playlists")
public class PlaylistController {

	@Autowired
	PlaylistRepository plrepo;

	@Autowired
	SongRepository songrepo;

	@PersistenceContext
	private EntityManager entityManager;

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

	@DeleteMapping("/{id}")
	public ApiResponse deletePlaylist(@PathVariable(value="id") Long id) {
		try {
			plrepo.deleteById(id);
		}catch(IllegalArgumentException ex) {
			return new ApiResponse(false, "Could not find Playlist id");
		}
		//TODO 
		return new ApiResponse(true, "Playlist deleted!");
	}

    @GetMapping("/user/{user_id}")
    public List<Playlist> getUserAlbums(@PathVariable("user_id") Long userId){
    	return plrepo.findAllByCreatedBy(userId);
    }
    

    @PostMapping("")
    public Playlist newPlaylist(@RequestBody PlaylistRequest plRequest) {
    	Set<Song> pl_songs = new HashSet<Song>();
    	Song song = songrepo.findById(plRequest.getSongId()).orElseThrow(() -> new ResponseStatusException(
				  HttpStatus.NOT_FOUND, "cannot find song in the database"
    			));

    	pl_songs.add(song);
    	Playlist pl = new Playlist(plRequest.getName(), song.getCover_art_url(), pl_songs);
    	pl = plrepo.save(pl);
    	return pl;
    }
    
    @PostMapping("/{playlist_id}/add/{song_id}")
    public ApiResponse addSongToPlaylist(@PathVariable(value="playlist_id") Long pl_id, @PathVariable(value="song_id") Long song_id) {
    	
		Playlist pl = plrepo.findById(pl_id).orElseThrow(() -> new ResponseStatusException(
				  HttpStatus.NOT_FOUND, "playlist not found"
				));
		pl.getSongs().add(entityManager.getReference(Song.class, song_id));
		plrepo.save(pl);
    	return new ApiResponse(true, "Song added to playlist");
    }
    
    
    @GetMapping("/search/name/{name}")
    public List<ModelName> FindPlaylistsByName(@PathVariable("name") String name){
    	return plrepo.findByNameIgnoreCaseContaining(name);
    }
}
