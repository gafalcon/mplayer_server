package com.example.demo.payloads;

public class SongComplete {
	Long id;
	String name;
	String album;
	String artist;
	String url;
	String cover_art_url;
	String genres;
	String lyrics;
	Long albumId;
	Long totalLikes;
	Long totalDislikes;
	Long totalReproductions;

	public SongComplete() {
		
	}
	public SongComplete(Long id, String name, String album, String artist, String url, String cover_art_url, String genres,
			String lyrics, Long albumId, Long totalLikes, Long totalDislikes, Long totalReproductions) {
		this.id = id;
		this.name = name;
		this.album = album;
		this.artist = artist;
		this.url = url;
		this.cover_art_url = cover_art_url;
		this.genres = genres;
		this.lyrics = lyrics;
		this.albumId = albumId;
		this.totalLikes = totalLikes;
		this.totalDislikes = totalDislikes;
		this.totalReproductions = totalReproductions;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAlbum() {
		return album;
	}
	public void setAlbum(String album) {
		this.album = album;
	}
	public String getArtist() {
		return artist;
	}
	public void setArtist(String artist) {
		this.artist = artist;
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
	public Long getAlbumId() {
		return albumId;
	}
	public void setAlbumId(Long albumId) {
		this.albumId = albumId;
	}
	public Long getTotalLikes() {
		return totalLikes;
	}
	public void setTotalLikes(Long totalLikes) {
		this.totalLikes = totalLikes;
	}
	public Long getTotalDislikes() {
		return totalDislikes;
	}
	public void setTotalDislikes(Long totalDislikes) {
		this.totalDislikes = totalDislikes;
	}
	public Long getTotalReproductions() {
		return totalReproductions;
	}
	public void setTotalReproductions(Long totalReproductions) {
		this.totalReproductions = totalReproductions;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	
}
