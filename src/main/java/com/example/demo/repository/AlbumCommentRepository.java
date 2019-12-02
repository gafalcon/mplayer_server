package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Album;
import com.example.demo.models.AlbumComment;
import com.example.demo.models.Comment;

@Repository
public interface AlbumCommentRepository  extends CrudRepository<AlbumComment, Long>{

    List<AlbumComment> findAllByAlbum(Album album);
    
    @Query("SELECT NEW com.example.demo.models.Comment(c.id, c.comment, u.username, c.createdBy, c.createdAt, u.profilePhoto) FROM AlbumComment c, User u WHERE c.album.id = :albumId AND c.createdBy = u.id ORDER BY c.createdAt DESC")
    List<Comment> findAlbumComments(@Param("albumId") Long album_id);
}
