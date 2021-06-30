package com.user.demo.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.user.demo.service.CustomUserDetailsService;
import com.user.demo.service.MyUserDetails;
import com.user.demo.config.JwtUtil;
import com.user.demo.model.AuthenticateRequest;
import com.user.demo.model.AuthenticationResponse;
import com.user.demo.model.DAOUser;
import com.user.demo.model.NewdonorModel;
import com.user.demo.model.UserDTO;
@CrossOrigin(origins ="http://localhost:4200")
@RestController

public class AuthenticationController {
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private CustomUserDetailsService userDetailsService;

	@Autowired
	private JwtUtil jwtTokenUtil;
	
    @PostMapping("/login")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticateRequest authenticationRequest)
			throws Exception {
		try {
			Authentication authentication=authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					authenticationRequest.getUsername(), authenticationRequest.getPassword()));
			SecurityContextHolder.getContext().setAuthentication(authentication);
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
		final MyUserDetails userDetails = (MyUserDetails)userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

		final String token = jwtTokenUtil.generateToken(userDetails);
		
        final List<String> role=userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());
		return ResponseEntity.ok(new AuthenticationResponse(userDetails.getId(),token,userDetails.getUsername(),userDetails.getEmail(),userDetails.getPhonenumber(),role.get(0)));
	}
    @PostMapping("/register")
	public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
		return ResponseEntity.ok(userDetailsService.save(user));
	}
    @GetMapping({"/getprofile/{id}"})
	public Optional<DAOUser> getById(@PathVariable int id){
		return userDetailsService.getById(id);
	}
    @RequestMapping("/profileedit/{id}")
	public ResponseEntity<HttpStatus> updateProfile(@RequestBody DAOUser daouser,@PathVariable int id){
    	userDetailsService.updateProfile(daouser,id);
		return new ResponseEntity<>(HttpStatus.OK);
	}


}
