package com.nagarro.NotesApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.nagarro.NotesApp.model.Notes;
import com.nagarro.NotesApp.model.User;

import org.springframework.data.domain.Pageable;


public interface NotesRepository extends JpaRepository<Notes, Integer> {
	List<Notes> findByUser(User user);
	 List<Notes> findTop10ByUserOrderByCreatedDtDesc(User user);
	
	    @Query("SELECT n.id FROM Notes n WHERE n.user.id = :userId ORDER BY n.createdDt DESC")
	    List<Long> findLastTenNoteIds(@Param("userId") Long userId, Pageable pageable);
	 
	 @Transactional
	 @Modifying
	    @Query(value = "DELETE FROM notes WHERE user_id = :userId AND id NOT IN :lastTenNoteIds", nativeQuery = true)
	    void deleteUsers(@Param("userId") Long userId, @Param("lastTenNoteIds") List<Long> lastTenNoteIds);
	
	 
	 
	 
	
}
