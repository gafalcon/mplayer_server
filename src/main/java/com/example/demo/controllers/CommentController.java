package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amazonaws.services.appstream.model.ResourceNotAvailableException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.models.Album;
import com.example.demo.models.AlbumComment;
import com.example.demo.models.Comment;
import com.example.demo.models.Song;
import com.example.demo.models.SongComment;
import com.example.demo.payloads.ApiResponse;
import com.example.demo.repository.AlbumCommentRepository;
import com.example.demo.repository.AlbumRepository;
import com.example.demo.repository.SongCommentRepository;
import com.example.demo.repository.SongRepository;
import com.example.demo.security.CurrentUser;
import com.example.demo.security.Role;
import com.example.demo.security.UserPrincipal;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api")
public class CommentController {

    @Autowired
    private AlbumCommentRepository alcommentRepo;
    @Autowired
    private AlbumRepository alrepo;
    @Autowired
    private SongCommentRepository scommentRepo;
    @Autowired
    private SongRepository songRepository;

    @GetMapping("/albums/{album_id}/comments")
    public List<Comment> getAlbumComments(@PathVariable(value="album_id") Long album_id){
    	return alcommentRepo.findAlbumComments(album_id);
    }

    @PostMapping("/albums/{album_id}/comments")
    public AlbumComment postComment(@PathVariable(value="album_id") Long album_id, @RequestBody AlbumComment comment) {
    	Album a = alrepo.findById(album_id).orElseThrow(() -> new ResourceNotAvailableException("Album not found"));
    	comment.setAlbum(a);
    	comment = alcommentRepo.save(comment);
    	return comment;
    }
    
    @DeleteMapping("/albums/{album_id}/comments/{comment_id}")
    public ApiResponse deleteAlbumComment(@PathVariable(value="comment_id") Long comment_id, @CurrentUser UserPrincipal user) {
    	AlbumComment saved_comment = alcommentRepo.findById(comment_id).orElseThrow(() -> new ResourceNotFoundException("Album Comment", "id", comment_id));
    	if (user.getRole().equals(Role.ROLE_ADMIN) || saved_comment.getCreatedBy() == user.getId()) {
    		alcommentRepo.delete(saved_comment);
    		return new ApiResponse(true, "comment deleted");
    	}else {
    		return new ApiResponse(false, "only creator or admin can delete comment");
    	}
    }
    
    @PutMapping("/albums/{album_id}/comments/{comment_id}")
    public AlbumComment editAlbumComment(@PathVariable(value="comment_id") Long comment_id, @RequestBody AlbumComment comment) {
    	AlbumComment saved_comment = alcommentRepo.findById(comment_id).orElseThrow(() -> new ResourceNotFoundException("Album Comment", "id", comment_id));
    	saved_comment.setComment(comment.getComment());
    	alcommentRepo.save(saved_comment);
    	return saved_comment;
    }
    
    
    @GetMapping("/songs/{song_id}/comments")
    public List<Comment> getSongComments(@PathVariable(value="song_id") Long song_id){
    	return scommentRepo.findComments(song_id);
    }

    @PostMapping("/songs/{song_id}/comments")
    public SongComment postComment(@PathVariable(value="song_id") Long song_id, @RequestBody SongComment comment) {
    	Song s = songRepository.findById(song_id).orElseThrow(() -> new ResourceNotAvailableException("Song not found"));
    	comment.setSong(s);
    	comment = scommentRepo.save(comment);
    	return comment;
    }

    @DeleteMapping("/songs/{song_id}/comments/{comment_id}")
    public ApiResponse deleteSongComment(@PathVariable(value="comment_id") Long comment_id, @CurrentUser UserPrincipal user) {
    	
    	SongComment c = scommentRepo.findById(comment_id).orElseThrow(() -> new ResourceNotFoundException("Song Comment", "id", comment_id));
    	if (user.getRole().equals(Role.ROLE_ADMIN) || c.getCreatedBy() == user.getId()) {
    		scommentRepo.delete(c);
    		return new ApiResponse(true, "comment deleted");
    	}else {
    		return new ApiResponse(false, "only creator or admin can delete comment");
    	}
    }

    @PutMapping("/songs/{song_id}/comments/{comment_id}")
    public SongComment editSongComment(@PathVariable(value="comment_id") Long comment_id, @RequestBody SongComment comment) {
    	SongComment saved_comment = scommentRepo.findById(comment_id).orElseThrow(() -> new ResourceNotFoundException("Album Comment", "id", comment_id));
    	saved_comment.setComment(comment.getComment());
    	scommentRepo.save(saved_comment);
    	return saved_comment;
    }
}
