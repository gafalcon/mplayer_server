package com.example.demo.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "songs")
public class Song {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank
	private String name;
	private String artist;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "album_id", nullable = true) //Change nullable if every song NEEDS to have an album
    @OnDelete(action = OnDeleteAction.CASCADE)
	private Album album;

	//@NotBlank
	private String url;
	private String coverArtUrl;
	
	private long totalLikes;
	private long totalDislikes;
	private long totalReproductions;
	private String genres;
	private String lyrics;
	
	public Song() {
		super();
	}

	public Song(String name, String artist, String url, Album album, String cover_art_url, String genres) {
		super();
		this.name = name;
		this.artist = artist;
		this.album = album;
		this.url = url;
		this.coverArtUrl = cover_art_url;
		this.genres = genres;
		this.totalDislikes = 0;
		this.totalLikes = 0;
		this.totalReproductions = 0;
	}
	public Song(String name, String artist, String url, Album album, String cover_art_url, long totalLikes, long totalDislikes, String genres, String lyrics, long totalReps) {
		super();
		this.name = name;
		this.artist = artist;
		this.album = album;
		this.url = url;
		this.coverArtUrl = cover_art_url;
	}
	public String getName() {
		return name;
	}
	
	public long getId() {
		return id;
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
    @JsonIgnore
	public Album getAlbum() {
		return album;
	}
    @JsonIgnore
	public void setAlbum(Album album) {
		this.album = album;
	}
	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getCover_art_url() {
		return coverArtUrl;
	}
	public void setCover_art_url(String cover_art_url) {
		this.coverArtUrl = cover_art_url;
	}
	@Override
	public String toString() {
		return "Song [id=" + id + ", name=" + name + ", artist=" + artist + ", url=" + url
				+ ", cover_art_url=" + coverArtUrl + "]";
	}

	public long getTotalLikes() {
		return totalLikes;
	}

	public void setTotalLikes(long totalLikes) {
		this.totalLikes = totalLikes;
	}

	public long getTotalDislikes() {
		return totalDislikes;
	}

	public void setTotalDislikes(long totalDislikes) {
		this.totalDislikes = totalDislikes;
	}

	public long getTotalReproductions() {
		return totalReproductions;
	}

	public void setTotalReproductions(long totalReproductions) {
		this.totalReproductions = totalReproductions;
	}

	public String getGenres() {
		return genres;
	}

	public void setGenres(String genres) {
		this.genres = genres;
	}

	public String getLyrics() {
		return lyrics;
	}

	public void setLyrics(String lyrics) {
		this.lyrics = lyrics;
	}
	
	
	
}
