package com.nagarro.NotesApp.utilities;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.nagarro.NotesApp.model.User;
import com.nagarro.NotesApp.repository.*;


@Component

public class HourlyNotesDeleteScheduler {

    @Autowired
    private NotesRepository noteRepository;
    @Autowired
    private UserRepository userRepository;

//    @Scheduled(cron = "0 * * * * *") 
    @Scheduled(cron = "0 0 * ? * *") 

    	public void deleteNotesHourly() {
    	System.out.println("cron");
    	    List<User> users = userRepository.findAll();
    	    for (User user : users) {
    	        List<Long> lastTenNoteIds = noteRepository.findLastTenNoteIds(user.getId(), PageRequest.of(0, 10));
    	        noteRepository.deleteUsers(user.getId(), lastTenNoteIds);
    	    }
    	}




}
