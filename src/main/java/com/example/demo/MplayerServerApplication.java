package com.example.demo;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
//import java.util.stream.Stream;
import java.util.TimeZone;

import javax.annotation.PostConstruct;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import com.example.demo.models.Album;
import com.example.demo.models.Playlist;
import com.example.demo.models.Song;
import com.example.demo.repository.AlbumRepository;
import com.example.demo.repository.PlaylistRepository;
import com.example.demo.repository.SongRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.storage.StorageProperties;
import com.example.demo.storage.StorageService;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;


@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
@EntityScan(basePackageClasses = {
		MplayerServerApplication.class,
		Jsr310JpaConverters.class
})
public class MplayerServerApplication {

	@PostConstruct
	void init() {
		TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
	}
	public static void main(String[] args) {
		SpringApplication.run(MplayerServerApplication.class, args);
	}

    @Bean
    CommandLineRunner init(UserRepository userRepository, SongRepository songRepo, PlaylistRepository plrepo, AlbumRepository alrepo, StorageService storageService) {
        return args -> {
        	storageService.init();
        	//initDb(userRepository, songRepo, plrepo, alrepo);
        };
    }
    
    public void initDb(UserRepository userRepository, SongRepository songRepo, PlaylistRepository plrepo, AlbumRepository arepo)
    {
		//JSON parser object to parse read file
    	List<Song> songsInDB = (List<Song>) songRepo.findAll();
    	if (songsInDB.size() != 0)
    			return;

        JSONParser jsonParser = new JSONParser();	

		 try (FileReader reader = new FileReader("./src/main/java/com/example/demo/playlists.json"))
	        {
	            //Read JSON file
	            Object obj = jsonParser.parse(reader);
	 
	            JSONObject jobj = (JSONObject) obj;
	            JSONArray playlists = (JSONArray) jobj.get("full_playlists");
	            System.out.println(playlists);
	             
	            for(Object playlist : playlists) {
	            	JSONObject pl = (JSONObject) playlist;
	            	String name = (String) pl.get("playlist_name");
	            	String cover = (String) pl.get("cover_art_url");
	            	JSONArray songs = (JSONArray) pl.get("songs");
	            	System.out.println(name + " " + cover);
	            	Set<Song> pl_songs = new HashSet<Song>();
	            	
	            	Album a = new Album(name, "artist", null, cover, null, "rock");
	            	Album saved_al = arepo.save(a);
	            	Playlist p = new Playlist(name, cover, null);
	            	//Set<Song> 

	            	for(Object s : songs) {
	            		JSONObject song = (JSONObject) s;
	            		String song_name = (String) song.get("name");
	            		String song_album = (String) song.get("album");
	            		String artist = (String) song.get("artist");
	            		String song_url = (String) song.get("url");
	            		String song_cover_art_url = (String) song.get("cover_art_url");
	            		
	            		System.out.println("Song: " + song_name + " " + song_url + " " + song_album);
	            		
	            		Song sng = new Song(song_name, artist, song_url,null, song_cover_art_url, "rock");
	            		songRepo.save(sng);
	            		pl_songs.add(sng);
	            	}
	            	p.setSongs(pl_songs);
	            	saved_al.setSongs(pl_songs);
	            	arepo.save(saved_al);
	            	plrepo.save(p);
	            }
	            
	 
	        } catch (FileNotFoundException e) {
	            e.printStackTrace();
	        } catch (IOException e) {
	            e.printStackTrace();
	        } catch (ParseException e) {
	            e.printStackTrace();
	        }	
        	
        	/*
            Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
                User user = new User(name, name.toLowerCase() + "@domain.com");
                userRepository.save(user);
            });
            */
    }
}
