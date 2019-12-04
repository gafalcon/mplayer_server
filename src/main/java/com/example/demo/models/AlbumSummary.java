package com.example.demo.models;

public class AlbumSummary {

	private Long id;
	private String name;
	private String cover_art_url;
	public AlbumSummary(Long id, String name, String cover_art_url) {
		this.id = id;
		this.name = name;
		this.setCover_art_url(cover_art_url);
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
	public String getCover_art_url() {
		return cover_art_url;
	}
	public void setCover_art_url(String cover_art_url) {
		this.cover_art_url = cover_art_url;
	}
	
	
}
