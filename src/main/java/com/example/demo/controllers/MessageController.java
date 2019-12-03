package com.example.demo.controllers;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.enums.MessageStatus;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.models.Message;
import com.example.demo.models.MessageResponse;
import com.example.demo.models.User;
import com.example.demo.payloads.ApiResponse;
import com.example.demo.payloads.MessageRequest;
import com.example.demo.repository.MessageRepository;
import com.example.demo.security.CurrentUser;
import com.example.demo.security.Role;
import com.example.demo.security.UserPrincipal;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

	@Autowired
	private MessageRepository messageRepo;
	
	@PersistenceContext
	private EntityManager entityManager;

	@GetMapping("/unread")
	public List<MessageResponse> getAllUnreadMessages( @CurrentUser UserPrincipal user){
		User currentUser = entityManager.getReference(User.class, user.getId());
		return messageRepo.findAllUnread(currentUser, MessageStatus.UNREAD);
	}
	
	@GetMapping("/received")
	public List<MessageResponse> getAllMessagesReceived( @CurrentUser UserPrincipal user){
		User currentUser = entityManager.getReference(User.class, user.getId());
		return messageRepo.findAllReceived(currentUser);
	}
	
	@GetMapping("/{message_id}")
	public MessageResponse getMessage(@PathVariable("message_id") Long message_id) {
		return messageRepo.findMessage(message_id)
				.orElseThrow(()-> new ResourceNotFoundException("Message", "id", message_id));
	}
	
	@GetMapping("/sent")
	public List<MessageResponse> getAllSentMessages(@CurrentUser UserPrincipal user){
		User sender = entityManager.getReference(User.class, user.getId());
		return messageRepo.findAllSent(sender);
	}
	
	@PostMapping("")
	public MessageResponse createMessage(@CurrentUser UserPrincipal user, @RequestBody MessageRequest messageRequest) {
		User sender = entityManager.getReference(User.class, user.getId());
		User receiver = entityManager.getReference(User.class, messageRequest.getReceiver_id());
		
		Message m = new Message(messageRequest.getMessage(), sender, receiver);
		m = messageRepo.save(m);
		return new MessageResponse(m.getId(), m.getSender().getUsername(), 
				m.getReceiver().getUsername(), m.getSender().getId(), 
				m.getReceiver().getId(), m.getMessage(), m.getCreatedAt(), m.getStatus(), "");
	}

	@DeleteMapping("/{message_id}")
	public ApiResponse deleteMessage(@PathVariable("message_id") Long message_id, @CurrentUser UserPrincipal user) {

		Message m =  messageRepo.findById(message_id)
				.orElseThrow(()-> new ResourceNotFoundException("Message", "id", message_id));
		if (user.getId() == m.getSender().getId() || user.getRole().equals(Role.ROLE_ADMIN)) {
			messageRepo.delete(m);
			return new ApiResponse(true, "message deleted");
		}else {
			return new ApiResponse(false, "only creator or admin can delete this message");
		}
	}
	
	@PutMapping("/{message_id}")
	public ApiResponse editMessage(@PathVariable("message_id") Long message_id, @CurrentUser UserPrincipal user, @RequestBody MessageRequest messageRequest) {
		Message m =  messageRepo.findById(message_id)
				.orElseThrow(()-> new ResourceNotFoundException("Message", "id", message_id));
		if (user.getId() == m.getSender().getId() || user.getRole().equals(Role.ROLE_ADMIN)) {
			m.setMessage(messageRequest.getMessage());
			messageRepo.save(m);
			return new ApiResponse(true, "message edited");
		}else {
			return new ApiResponse(false, "only creator or admin can edit this message");
		}
	}
	
	@PostMapping("/{message_id}/mark_read")
	public ApiResponse markMessageAsRead(@PathVariable("message_id") Long message_id, @CurrentUser UserPrincipal user) {
		Message m =  messageRepo.findById(message_id)
				.orElseThrow(()-> new ResourceNotFoundException("Message", "id", message_id));
		if (user.getId() == m.getReceiver().getId() || user.getRole().equals(Role.ROLE_ADMIN)) {
			m.setStatus(MessageStatus.READ);
			messageRepo.save(m);
			return new ApiResponse(true, "message marked as read");
		}else {
			return new ApiResponse(true, "user doesnt have privileges to edit this message");
		}
	}

	@PostMapping("/{message_id}/mark_unread")
	public ApiResponse markMessageAsUnread(@PathVariable("message_id") Long message_id, @CurrentUser UserPrincipal user) {
		Message m =  messageRepo.findById(message_id)
				.orElseThrow(()-> new ResourceNotFoundException("Message", "id", message_id));
		if (user.getId() == m.getReceiver().getId() || user.getRole().equals(Role.ROLE_ADMIN)) {
			m.setStatus(MessageStatus.UNREAD);
			messageRepo.save(m);
			return new ApiResponse(true, "message marked as unread");
		}else {
			return new ApiResponse(true, "user doesnt have privileges to edit this message");
		}
	}
}
