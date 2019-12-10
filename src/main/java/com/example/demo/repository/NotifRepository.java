package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.enums.NotifStatus;
import com.example.demo.enums.NotifType;
import com.example.demo.models.Notif;
import com.example.demo.models.User;

@Repository
public interface NotifRepository  extends CrudRepository<Notif, Long>{
	
	//@Query("SELECT n FROM Notif n WHERE n.receiver = :receiver AND n.status = :status")
	//List<Notif> findByStatus(@Param("receiver") User receiver, @Param("status") NotifStatus status);
	
	List<Notif> findByReceiverAndStatus(User receiver, NotifStatus status);
	List<Notif> findByReceiverOrderByCreatedAtDesc(User receiver);
	List<Notif> findByReceiverAndStatusAndNotifType(User receiver, NotifStatus status, NotifType notifType);
}
