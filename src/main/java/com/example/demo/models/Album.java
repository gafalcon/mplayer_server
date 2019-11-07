package com.example.demo.models;

import java.time.Instant;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.example.demo.models.audit.UserDateAudit;

@Entity
@Table(name = "albums")
public class Album extends UserDateAudit{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank
	private String name;
	
	@NotBlank
	private String artist;
	
	private Instant releaseDate;
	private String coverArt;
	
	@OneToMany(
			mappedBy = "album",
			cascade=CascadeType.ALL,
			fetch = FetchType.EAGER,
			orphanRemoval = true
			)
	//@JoinColumn(name = "fk_album")
	@Fetch(FetchMode.SELECT)
	private Set<Song> songs;

	private long totalLikes;
	private long totalDislikes;
	private long totalReproductions;
	private String genres;
	
	public Album(String name, String artist, Instant releaseDate, String coverArt, Set<Song> songs, String genres) {
		super();
		this.name = name;
		this.artist = artist;
		this.releaseDate = releaseDate;
		this.coverArt = coverArt;
		this.songs = songs;
		this.totalDislikes = 0;
		this.totalLikes = 0;
		this.totalReproductions = 0;
		this.genres = genres;
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

	public Instant getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(Instant releaseDate) {
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
	
	
}
