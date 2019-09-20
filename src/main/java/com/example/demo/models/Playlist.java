package com.example.demo.models;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Playlist {
	
/*    constructor(public playlist_name: string,
            public cover_art_url: string,
            public songs: Array<Song> ) {
*/
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	private String cover_art_url;
	
	@ManyToMany(cascade=CascadeType.MERGE)
	private Set<Song> songs;

	public Playlist(String name, String cover_art_url, Set<Song> songs) {
		this.name = name;
		this.cover_art_url = cover_art_url;
		this.songs = songs;
	}

	public Playlist() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCover_art_url() {
		return cover_art_url;
	}

	public void setCover_art_url(String cover_art_url) {
		this.cover_art_url = cover_art_url;
	}

	public Set<Song> getSongs() {
		return songs;
	}

	public void setSongs(Set<Song> songs) {
		this.songs = songs;
	}

	@Override
	public String toString() {
		return "Playlist [id=" + id + ", name=" + name + ", cover_art_url=" + cover_art_url  + "]";
	}
	
	
}

