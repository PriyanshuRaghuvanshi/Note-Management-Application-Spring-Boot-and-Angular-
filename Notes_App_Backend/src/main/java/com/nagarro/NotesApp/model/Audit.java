package com.nagarro.NotesApp.model;

import java.time.LocalDateTime;
import java.util.Date;



import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

 

import lombok.Data;
import lombok.ToString;

	@Data // used for lomboke
	@ToString
	@MappedSuperclass
	@EntityListeners(AuditingEntityListener.class)
	public class Audit {



}	