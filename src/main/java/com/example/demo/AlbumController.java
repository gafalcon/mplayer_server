package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.util.StringUtils;

import com.example.demo.models.Album;
import com.example.demo.models.AlbumRepository;
import com.example.demo.models.Song;
import com.example.demo.models.SongRepository;
import com.example.demo.storage.AmazonS3ClientService;
import com.example.demo.storage.StorageService;


import java.util.List;
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AlbumController {
	
	private final SongRepository songRepository;
    private final StorageService storageService;
    private final AlbumRepository alrepo;

    @Autowired
    private AmazonS3ClientService amazonS3ClientService;
    @Value("${aws.s3.url}")
    private String s3url;    

	public AlbumController(SongRepository rep, AlbumRepository alrepo, StorageService storageService) {
		this.songRepository = rep;
		this.alrepo = alrepo;
		this.storageService = storageService;
	}
	
	@GetMapping("/albums")
	public List<Album> getAlbums(){
		return (List <Album>) alrepo.findAll();
	}
	
	@GetMapping("/albums/{id}")
	public Album getAlbum(@PathVariable(value="id") Long al_id) {
		return alrepo.findById(al_id).orElseThrow(() -> new ResponseStatusException(
					HttpStatus.NOT_FOUND, "album not found"
				));
	}
	
	@PostMapping("/albums")
	Album addAlbum(@RequestBody Album album) {
		System.out.println(album);
		songRepository.saveAll(album.getSongs());
		for(Song s: album.getSongs()) {
			System.out.println(s);
		}
		Album saved_album = alrepo.save(album);
		return saved_album;
	}
	
	
    @PostMapping("/albums/cover")
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
}
