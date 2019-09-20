package com.example.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Song {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	private String artist;
	private String album;
	private String url;
	private String cover_art_url;
	
	
	public Song() {
		super();
	}
	public Song(String name, String artist, String album, String url, String cover_art_url) {
		super();
		this.name = name;
		this.artist = artist;
		this.album = album;
		this.url = url;
		this.cover_art_url = cover_art_url;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getArtist() {
		return artist;
	}
	public void setArtist(String artist) {
		this.artist = artist;
	}
	public String getAlbum() {
		return album;
	}
	public void setAlbum(String album) {
		this.album = album;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getCover_art_url() {
		return cover_art_url;
	}
	public void setCover_art_url(String cover_art_url) {
		this.cover_art_url = cover_art_url;
	}
	@Override
	public String toString() {
		return "Song [id=" + id + ", name=" + name + ", artist=" + artist + ", album=" + album + ", url=" + url
				+ ", cover_art_url=" + cover_art_url + "]";
	}
	
	
	
}
