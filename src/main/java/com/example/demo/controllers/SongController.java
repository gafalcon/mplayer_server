package com.example.demo.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.util.StringUtils;

import com.example.demo.models.Song;
import com.example.demo.repository.PlaylistRepository;
import com.example.demo.repository.SongRepository;
import com.example.demo.storage.AmazonS3ClientService;
import com.example.demo.storage.StorageService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class SongController {
	private final SongRepository songRepository;
    //private final StorageService storageService;

    @Autowired
    private AmazonS3ClientService amazonS3ClientService;
    @Value("${aws.s3.url}")
    private String s3url;    

	public SongController(SongRepository rep, StorageService storageService) {
		this.songRepository = rep;
	//	this.storageService = storageService;
	}
	@GetMapping("/api/all_songs")
	public List<Song> getSongs() {
		return (List <Song>) songRepository.findAll();
	}
	

	@PostMapping("/api/songs")
	Song addSong(@RequestBody Song song) {
		System.out.println(song);
		Song saved_song = songRepository.save(song);
		return saved_song;
	}
	
    @PostMapping("/api/songs/upload")
    public Song SongFileUpload(@RequestParam("media_file") MultipartFile file,
    		@RequestParam("song_id") long song_id) {//, @RequestParam("filename") String filename) {

    	Song song = songRepository.findById(song_id).orElseThrow(() -> new ResponseStatusException(
				  HttpStatus.NOT_FOUND, "cannot find song in the database"
    			));

        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        filename = filename.replaceAll("\\s+","");
        filename = String.format("songs/%d_%s",song.getId(), filename);
        amazonS3ClientService.uploadFileToS3Bucket(file, filename, true);
        //storageService.store(file, filename, true);
        song.setUrl(this.s3url+filename);
        song = songRepository.save(song);

        return song;
    }

	@PostMapping("/api/songs2")
	void addSong2(@RequestBody Map<String, Object> postParams){
		System.out.println(postParams);
	}
	
}
