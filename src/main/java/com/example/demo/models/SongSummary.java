package com.example.demo.models;

public class SongSummary {
	Long id;
	String name;
	String album;
	Long album_id;
	public SongSummary(Long id, String name, String album, Long album_id) {
		this.id = id;
		this.name = name;
		this.album = album;
		this.album_id = album_id;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	public Long getAlbum_id() {
		return album_id;
	}
	public void setAlbum_id(Long album_id) {
		this.album_id = album_id;
	}
	
}
