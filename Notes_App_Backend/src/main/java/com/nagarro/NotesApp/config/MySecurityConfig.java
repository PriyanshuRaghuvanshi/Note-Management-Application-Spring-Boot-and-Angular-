package com.nagarro.NotesApp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.nagarro.NotesApp.servicesimpl.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class MySecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private JwtAuthEntryPoint unAuthorizedHandler;

	@Autowired
	private JWTAuthenticationFilter jwtAuthenticationFilter;

	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		// Create and expose the AuthenticationManager as a bean
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// Configure the authentication manager
		auth.userDetailsService(userDetailsServiceImpl).passwordEncoder(passwordEncoder());
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.csrf().disable()
			.cors().disable()
			.authorizeRequests()
				// Allow access to specific endpoints without authentication
				.antMatchers(
					"/generate-token",
					"/user/register",
					"/user/**",
					"/user/notes/**",
					"/user/notes/createNote",
					"/user/notes/all",
					"/user/notes/latest",
			
				
					"user/notes/delete/{Id}")
				.permitAll()
				// Allow pre-flight requests (OPTIONS) without authentication
				.antMatchers(HttpMethod.OPTIONS).permitAll()
				// Require authentication for any other request
				.anyRequest().authenticated()
			.and()
				.exceptionHandling().authenticationEntryPoint(unAuthorizedHandler)
			.and()
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

		// Add the JWT authentication filter before the UsernamePasswordAuthenticationFilter
		http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
	}
}

