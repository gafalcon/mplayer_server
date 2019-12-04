package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.enums.MessageStatus;
import com.example.demo.models.Message;
import com.example.demo.models.MessageResponse;
import com.example.demo.models.User;

@Repository
public interface MessageRepository extends CrudRepository<Message, Long>
{
	List<Message> findAllByStatusAndReceiverOrderByCreatedAt(MessageStatus status, User receiver);
	List<Message> findAllBySenderOrderByCreatedAt(User sender);
	List<Message> findAllByReceiverOrderByCreatedAt(User receiver);
	
	Long countByStatusAndReceiver(MessageStatus status, User receiver);
	
	@Query("SELECT NEW com.example.demo.models.MessageResponse(m.id, m.sender.username, m.receiver.username, m.sender.id, m.receiver.id, m.message, m.createdAt, m.status, m.sender.profilePhoto, m.receiver.profilePhoto) FROM Message m WHERE m.receiver = :receiver AND m.status = :status")
	List<MessageResponse> findAllUnread(@Param("receiver") User receiver, @Param("status") MessageStatus status);

	@Query("SELECT NEW com.example.demo.models.MessageResponse(m.id, m.sender.username, m.receiver.username, m.sender.id, m.receiver.id, m.message, m.createdAt, m.status, m.sender.profilePhoto, m.receiver.profilePhoto) FROM Message m WHERE m.receiver = :receiver ORDER BY m.createdAt DESC")
	List<MessageResponse> findAllReceived(@Param("receiver") User receiver);
	
	
	@Query("SELECT NEW com.example.demo.models.MessageResponse(m.id, m.sender.username, m.receiver.username, m.sender.id, m.receiver.id, m.message, m.createdAt, m.status, m.sender.profilePhoto, m.receiver.profilePhoto) FROM Message m WHERE m.sender = :sender ORDER BY m.createdAt DESC")
	List<MessageResponse> findAllSent(@Param("sender") User sender);

	@Query("SELECT NEW com.example.demo.models.MessageResponse(m.id, m.sender.username, m.receiver.username, m.sender.id, m.receiver.id, m.message, m.createdAt, m.status, m.sender.profilePhoto, m.receiver.profilePhoto) FROM Message m WHERE m.id = :message_id")
	Optional<MessageResponse>findMessage(@Param("message_id") Long message_id);
	

	//List<User> findAllConversations(@Param("user_id") Long logged_user_id);
}
