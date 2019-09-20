package com.example.demo;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.models.Playlist;
import com.example.demo.models.PlaylistRepository;
import com.example.demo.models.Song;
import com.example.demo.models.SongRepository;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
@SpringBootApplication
public class MplayerServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(MplayerServerApplication.class, args);
	}

    @Bean
    CommandLineRunner init(UserRepository userRepository, SongRepository songRepo, PlaylistRepository plrepo) {
        return args -> {
		//JSON parser object to parse read file
        JSONParser jsonParser = new JSONParser();	
		 try (FileReader reader = new FileReader("/home/gabo/Documents/Web/mplayer/src/music/playlists.json"))
	        {
	            //Read JSON file
	            Object obj = jsonParser.parse(reader);
	 
	            JSONObject jobj = (JSONObject) obj;
	            JSONArray playlists = (JSONArray) jobj.get("full_playlists");
	            System.out.println(playlists);
	             
	            playlists.forEach(playlist -> {
	            	JSONObject pl = (JSONObject) playlist;
	            	String name = (String) pl.get("playlist_name");
	            	String cover = (String) pl.get("cover_art_url");
	            	JSONArray songs = (JSONArray) pl.get("songs");
	            	System.out.println(name + " " + cover);
	            	Set<Song> pl_songs = new HashSet<Song>();
	            	
	            	Playlist p = new Playlist(name, cover, null);
	            	songs.forEach(s -> {
	            		JSONObject song = (JSONObject) s;
	            		String song_name = (String) song.get("name");
	            		String song_album = (String) song.get("album");
	            		String artist = (String) song.get("artist");
	            		String song_url = (String) song.get("url");
	            		String song_cover_art_url = (String) song.get("cover_art_url");
	            		
	            		Song sng = new Song(song_name, artist, song_album, song_url, song_cover_art_url);
	            		songRepo.save(sng);
	            		pl_songs.add(sng);
	            	});
	            	
	            	p.setSongs(pl_songs);
	            	plrepo.save(p);
	            });
	            
	            //Iterate over employee array
	            //employeeList.forEach( emp -> parseEmployeeObject( (JSONObject) emp ) );
	 
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
        	//public Song(String name, String artist, String album, String url, String cover_art_url) {
     

            Song song = new Song("song name", "artist", "album", "url", "cover art");
            songRepo.save(song);
            Song song2 = new Song("song name 2", "artist2", "album2", "url2", "cover art2");
            songRepo.save(song2);
            userRepository.findAll().forEach(System.out::println);
            songRepo.findAll().forEach(System.out::println);
            
            Playlist playlist = new Playlist("Playlist 1", "cover art playlist 1", null);
            Set<Song> songs = new HashSet<Song>();
            songs.add(song);
            songs.add(song2);
            playlist.setSongs(songs);
            plrepo.save(playlist);
            plrepo.findAll().forEach(System.out::println);
            */
        };
    }
}
