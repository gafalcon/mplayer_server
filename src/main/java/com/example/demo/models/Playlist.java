package com.example.demo.models;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.example.demo.models.audit.UserDateAudit;

@Entity
@Table(name = "playlists")
public class Playlist extends UserDateAudit {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank
	private String name;

	private String coverArtUrl;
	
	@ManyToMany(cascade=CascadeType.MERGE)
	private Set<Song> songs;

	public Playlist(String name, String cover_art_url, Set<Song> songs) {
		this.name = name;
		this.coverArtUrl = cover_art_url;
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
		return coverArtUrl;
	}

	public void setCover_art_url(String cover_art_url) {
		this.coverArtUrl = cover_art_url;
	}

	public Set<Song> getSongs() {
		return songs;
	}

	public void setSongs(Set<Song> songs) {
		this.songs = songs;
	}

	@Override
	public String toString() {
		return "Playlist [id=" + id + ", name=" + name + ", cover_art_url=" + coverArtUrl  + "]";
	}
	
	
}

