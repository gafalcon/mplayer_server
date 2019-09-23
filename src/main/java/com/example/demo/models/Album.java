package com.example.demo.models;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Album {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	private String artist;
	private String releaseDate;
	private String coverArt;
	
	@ManyToMany(cascade=CascadeType.MERGE)
	private Set<Song> songs;

	public Album(String name, String artist, String releaseDate, String coverArt, Set<Song> songs) {
		super();
		this.name = name;
		this.artist = artist;
		this.releaseDate = releaseDate;
		this.coverArt = coverArt;
		this.songs = songs;
	}
	
	public Album() {
		
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

	public String getArtist() {
		return artist;
	}

	public void setArtist(String artist) {
		this.artist = artist;
	}

	public String getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getCoverArt() {
		return coverArt;
	}

	public void setCoverArt(String coverArt) {
		this.coverArt = coverArt;
	}

	public Set<Song> getSongs() {
		return songs;
	}

	public void setSongs(Set<Song> songs) {
		this.songs = songs;
	}

	@Override
	public String toString() {
		return "Album [id=" + id + ", name=" + name + ", artist=" + artist + ", releaseDate=" + releaseDate
				+ ", coverArt=" + coverArt + ", songs=" + songs + "]";
	}
	
	
}
