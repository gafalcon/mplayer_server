package com.example.demo.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.util.StringUtils;

import com.amazonaws.services.appstream.model.ResourceNotAvailableException;
import com.example.demo.models.Comment;
import com.example.demo.models.Song;
import com.example.demo.models.SongComment;
import com.example.demo.payloads.SongComplete;
import com.example.demo.repository.ModelName;
import com.example.demo.repository.SongCommentRepository;
import com.example.demo.repository.SongRepository;
import com.example.demo.storage.AmazonS3ClientService;
import com.example.demo.storage.StorageService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/songs")
public class SongController {
	private final SongRepository songRepository;
    //private final StorageService storageService;
	@Autowired
	private SongCommentRepository commentRepo;
    @Autowired
    private AmazonS3ClientService amazonS3ClientService;
    @Value("${aws.s3.url}")
    private String s3url;    

	public SongController(SongRepository rep, StorageService storageService) {
		this.songRepository = rep;
	//	this.storageService = storageService;
	}
	@GetMapping("")
	public List<Song> getSongs() {
		return (List <Song>) songRepository.findAll();
	}
	

	@PostMapping("")
	Song addSong(@RequestBody Song song) {
		System.out.println(song);
		Song saved_song = songRepository.save(song);
		return saved_song;
	}
	
    @PostMapping("/upload")
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
        if (song.getAlbum().getCover_art_url() != null)
        	song.setCover_art_url(song.getAlbum().getCover_art_url());
        song = songRepository.save(song);

        return song;
    }

	@PostMapping("/songs2")
	void addSong2(@RequestBody Map<String, Object> postParams){
		System.out.println(postParams);
	}
	
	@GetMapping("/{id}")
	public SongComplete getSong(@PathVariable(value="id") Long songId) {
		return songRepository.findSongCompleteById(songId).orElseThrow(() -> new ResponseStatusException(
					HttpStatus.NOT_FOUND, "album not found"
				));
	}
	
    @GetMapping("/search/name/{name}")
    public List<ModelName> FindByName(@PathVariable("name") String name){
    	return songRepository.findByNameIgnoreCaseContaining(name);
    }
}
