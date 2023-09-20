package com.nagarro.NotesApp.servicesimpl;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.nagarro.NotesApp.model.User;
import com.nagarro.NotesApp.repository.UserRepository;



@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	private UserRepository userRepository;

	// Loads a user by their username (email).
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = this.userRepository.getUserByEmail(username);
		if (user == null) {
			throw new UsernameNotFoundException("No User Found");
		}
		return user;
	}
}
