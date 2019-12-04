package com.example.demo.payloads;

import java.util.List;

public class PlaylistRequest {

	String name;
	Long songId;
	public Long getSongId() {
		return songId;
	}
	public void setSongId(Long songId) {
		this.songId = songId;
	}
	public PlaylistRequest(String name, Long songId) {
		this.name = name;
		this.songId = songId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
