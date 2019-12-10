package com.example.demo.controllers;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.example.demo.enums.NotifStatus;
import com.example.demo.enums.NotifType;
import com.example.demo.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Notif;
import com.example.demo.models.ProfessionalRequest;
import com.example.demo.models.User;
import com.example.demo.payloads.ApiResponse;
import com.example.demo.repository.NotifRepository;
import com.example.demo.repository.ProfessionalRequestRepository;
import com.example.demo.security.CurrentUser;
import com.example.demo.security.Role;
import com.example.demo.security.UserPrincipal;

@RestController
@RequestMapping("/api/notifs")
public class NotifController {
	
	@Autowired
	private NotifRepository notifRepo;
	@Autowired
	private ProfessionalRequestRepository requestRepo;

	
	@PersistenceContext
	private EntityManager entityManager;
	
	/*
	router.get('/', auth(), notif_controller.findNotifications)
	router.get('/agent_request', auth(), notif_controller.findAgentRequests)
	router.post('/agent_request', auth(), notif_controller.createAgentRequest)
	router.put('/:notif_id/unread', auth(), notif_controller.markAsUnread)
	router.get('/:notif_id', auth(), notif_controller.getNotification)
	router.post('/agent_request_denied/:user_id', auth(), notif_controller.denyAgentRequest)
	 */	
	
	@GetMapping("")
	List<Notif> getNotifications(@CurrentUser UserPrincipal user){
		User receiver = entityManager.getReference(User.class, user.getId());
		return notifRepo.findByReceiverOrderByCreatedAtDesc(receiver);
	}
	
	@PutMapping("")
	ApiResponse markAllAsRead(@CurrentUser UserPrincipal user) {
		User receiver = entityManager.getReference(User.class, user.getId());
		List<Notif> notifs = notifRepo.findByReceiverOrderByCreatedAtDesc(receiver);
		for (Notif notif : notifs) {
			notif.setStatus(NotifStatus.READ);
		}
		notifRepo.saveAll(notifs);
		return new ApiResponse(true, "all notifications read");
	}
	
	@GetMapping("/unread")
	List<Notif> getUnreadNotifis(@CurrentUser UserPrincipal user){
		User receiver = entityManager.getReference(User.class, user.getId());
		List<Notif> notifs = notifRepo.findByReceiverAndStatus(receiver, NotifStatus.UNREAD);
		if (receiver.getRole() == Role.ROLE_ADMIN) {
			List<ProfessionalRequest> requests = requestRepo.findAll();
			for (ProfessionalRequest r : requests) {
				notifs.add(new Notif(NotifType.ROLE_REQUEST, receiver, r.getUser().getUsername()));
			}
		}

		return notifs;
	}

	@GetMapping("/{notif_id}")
	Notif getNotif(@PathVariable("notif_id") Long notif_id) {
		Notif notif = notifRepo.findById(notif_id)
				.orElseThrow(()-> new ResourceNotFoundException("Notif", "id", notif_id));
		return notif;
	}

	@PutMapping("/{notif_id}/read")
	Notif markAsRead(@CurrentUser UserPrincipal user, @PathVariable("notif_id") Long notif_id) {
		Notif notif = notifRepo.findById(notif_id)
				.orElseThrow(()-> new ResourceNotFoundException("Notif", "id", notif_id));
		notif.setStatus(NotifStatus.READ);
		notif = notifRepo.save(notif);
		return notif;
	}

	@PutMapping("/{notif_id}/unread")
	Notif markAsUnread(@CurrentUser UserPrincipal user, @PathVariable("notif_id") Long notif_id) {
		Notif notif = notifRepo.findById(notif_id)
				.orElseThrow(()-> new ResourceNotFoundException("Notif", "id", notif_id));
		notif.setStatus(NotifStatus.UNREAD);
		notif = notifRepo.save(notif);
		return notif;
	}
}
