package com.example.demo.models;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name = "genres", uniqueConstraints = {
		@UniqueConstraint(columnNames = {
				"genre"
		})
})
public class Genre {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	

	@ManyToMany(cascade=CascadeType.MERGE)
	private Set<Album> albums;
	
	@ManyToMany(cascade=CascadeType.MERGE)
	private Set<Song> songs;

	@NotBlank
	private String genre;

	public Genre() {
		
	}
	public Genre(String genre) {
		this.genre = genre;
	}

	public Genre(String genre, Set<Album> albums, Set<Song> songs) {
		this.genre = genre;
		this.albums = albums;
		this.songs = songs;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Set<Album> getAlbums() {
		return albums;
	}

	public void setAlbums(Set<Album> albums) {
		this.albums = albums;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}
	
	
}
