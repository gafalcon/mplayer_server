package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Comment;
import com.example.demo.models.SongComment;

@Repository
public interface SongCommentRepository  extends CrudRepository<SongComment, Long>{

    @Query("SELECT NEW com.example.demo.models.Comment(c.id, c.comment, u.username, c.createdBy, c.createdAt) FROM SongComment c, User u WHERE c.song.id = :songId AND c.createdBy = u.id")
    List<Comment> findComments(@Param("songId") Long song_id);
}
