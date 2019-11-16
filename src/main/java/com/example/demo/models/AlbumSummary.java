package com.example.demo.models;

public class AlbumSummary {

	private Long id;
	private String name;
	private String coverArt;
	public AlbumSummary(Long id, String name, String coverArt) {
		this.id = id;
		this.name = name;
		this.coverArt = coverArt;
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
	public String getCoverArt() {
		return coverArt;
	}
	public void setCoverArt(String coverArt) {
		this.coverArt = coverArt;
	}
	
	
}
