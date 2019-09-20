package com.example.demo;

import java.util.List;
import java.util.Map;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.models.Playlist;
import com.example.demo.models.PlaylistRepository;
import com.example.demo.models.Song;
import com.example.demo.models.SongRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class SongController {
	private final SongRepository songRepository;
	private final PlaylistRepository plrepo;
	public SongController(SongRepository rep, PlaylistRepository plrepo) {
		this.songRepository = rep;
		this.plrepo = plrepo;
	}
	@GetMapping("/songs")
	public List<Song> getSongs() {
		return (List <Song>) songRepository.findAll();
	}
	
	@GetMapping("/playlists")
	public List<Playlist> getPlaylists(){
		return (List <Playlist>) plrepo.findAll();
	}

	@GetMapping("/playlists/{id}")
	public Playlist getPlaylist(@PathVariable(value="id") Long pl_id){
		return plrepo.findById(pl_id).orElseThrow(() -> new ResponseStatusException(
				  HttpStatus.NOT_FOUND, "playlist not found"
				));
	}

	@PostMapping("/songs")
	void addSong(@RequestBody Song song, @RequestBody String user) {
		System.out.println(song);
		System.out.println(user);
		//songRepository.save(song);
	}
	
	@PostMapping("/songs2")
	void addSong2(@RequestBody Map<String, Object> postParams){
		System.out.println(postParams);
	}
	
}
