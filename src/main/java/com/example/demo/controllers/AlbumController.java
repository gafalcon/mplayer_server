package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.util.StringUtils;

import com.amazonaws.services.appstream.model.ResourceNotAvailableException;
import com.amazonaws.services.opsworkscm.model.ResourceNotFoundException;
import com.example.demo.models.Album;
import com.example.demo.models.Song;
import com.example.demo.payloads.ApiResponse;
import com.example.demo.repository.AlbumRepository;
import com.example.demo.storage.AmazonS3ClientService;


import java.util.List;
@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/albums")
public class AlbumController {
	
    private final AlbumRepository alrepo;
    
    @Autowired
    private AmazonS3ClientService amazonS3ClientService;
    @Value("${aws.s3.url}")
    private String s3url;    

	public AlbumController(AlbumRepository alrepo) {
		this.alrepo = alrepo;
	}
	
	@GetMapping("")
	public List<Album> getAlbums(){
		return (List <Album>) alrepo.findAll();
	}
	
	@GetMapping("/{id}")
	public Album getAlbum(@PathVariable(value="id") Long al_id) {
		return alrepo.findById(al_id).orElseThrow(() -> new ResponseStatusException(
					HttpStatus.NOT_FOUND, "album not found"
				));
	}
	
	@DeleteMapping("/{id}")
	public ApiResponse deleteAlbum(@PathVariable(value="id") Long id) {
		try {
			alrepo.deleteById(id);
		}catch(IllegalArgumentException ex) {
			return new ApiResponse(false, "Could not find Album id");
		}
		//TODO 
		return new ApiResponse(true, "Album deleted!");
	}

	@PostMapping("")
	Album addAlbum(@RequestBody Album album) {
		System.out.println(album);
		//songRepository.saveAll(album.getSongs());
		for(Song s: album.getSongs()) {
			s.setAlbum(album);
			System.out.println(s);
		}//
		Album saved_album = alrepo.save(album);
		return saved_album;
	}
	
	
    @PostMapping("/cover")
    public Album SongFileUpload(@RequestParam("cover_file") MultipartFile file,
    		@RequestParam("album_id") long album_id) {//, @RequestParam("filename") String filename) {

    	Album album = alrepo.findById(album_id).orElseThrow(() -> new ResponseStatusException(
				  HttpStatus.NOT_FOUND, "cannot find album in the database"
    			));

        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        filename = filename.replaceAll("\\s+","");
        filename = String.format("images/%d_album_%s",album.getId(), filename);
        amazonS3ClientService.uploadFileToS3Bucket(file, filename, true);
//        storageService.store(file,filename, false);
        album.setCoverArt(this.s3url + filename);
        album = alrepo.save(album);

        return album;
    }
    
    @GetMapping("/user/{user_id}")
    public List<Album> getUserAlbums(@PathVariable("user_id") Long userId){
    	return alrepo.findAllByCreatedBy(userId);
    }
}
