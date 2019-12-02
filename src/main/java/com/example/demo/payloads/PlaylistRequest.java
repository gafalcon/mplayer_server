package com.example.demo.payloads;

import java.util.List;

public class PlaylistRequest {

	String name;
	Long plId;
	public Long getPlId() {
		return plId;
	}
	public void setPlId(Long plId) {
		this.plId = plId;
	}
	List<Long> songIds;
	public PlaylistRequest(String name, List<Long> songIds) {
		this.name = name;
		this.songIds = songIds;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Long> getSongIds() {
		return songIds;
	}
	public void setSongIds(List<Long> songIds) {
		this.songIds = songIds;
	}

	
}
