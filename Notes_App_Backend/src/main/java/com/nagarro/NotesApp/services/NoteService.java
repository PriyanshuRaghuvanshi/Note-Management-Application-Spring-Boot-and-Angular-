package com.nagarro.NotesApp.services;

import java.nio.file.AccessDeniedException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.NotesApp.model.*;
import com.nagarro.NotesApp.repository.NotesRepository;
@Service
public class NoteService {
    @Autowired
    private NotesRepository noteRepository;

    public List<Notes> getAllNotesByUser(User user) {
        return noteRepository.findByUser(user);
    }

    public Notes createNote(User user, Notes note) {
        note.setUser(user);
        return noteRepository.save(note);
    }

    public void deleteNoteById(User user, Integer id) throws AccessDeniedException {
        Optional<Notes> optionalNote = noteRepository.findById(id);
        if (optionalNote.isPresent() && optionalNote.get().getUser().equals(user)) {
            noteRepository.deleteById(id);
        } else {
            throw new AccessDeniedException("Access denied");
        }
    }
    

    
    public List<Notes> getLatestNotesForUser(User user) {
       
        return noteRepository.findTop10ByUserOrderByCreatedDtDesc(user);
    }

    
    

}

