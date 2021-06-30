package com.user.demo.service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.user.demo.model.DAOUser;
import com.user.demo.model.NewdonorModel;
import com.user.demo.model.UserDTO;
import com.user.demo.repository.UserRepository;


@Service
public class CustomUserDetailsService implements UserDetailsService {
	@Autowired
	private UserRepository userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		List<SimpleGrantedAuthority> roles=null;
		DAOUser user = userDao.findByUsername(username);
		if (user != null) {
			roles = Arrays.asList(new SimpleGrantedAuthority(user.getRole()));
			//return new User(user.getUsername(),user.getPassword(),user.getEmail(),roles);
			return MyUserDetails.build(user);
		}
		throw new UsernameNotFoundException("User not found with username: " + username);
		
	}
	    public DAOUser save(UserDTO user) {
		DAOUser newUser = new DAOUser();
		newUser.setId(user.getId());
		newUser.setUsername(user.getUsername());
		newUser.setEmail(user.getEmail());
		newUser.setPhonenumber(user.getPhonenumber());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		newUser.setRole(user.getRole());
		return userDao.save(newUser);
		
	}
	    @Transactional
	    public Optional<DAOUser> getById(int id)
	    {
	    	return userDao.findById(id);
	    }
	    @Transactional
	    public void updateProfile(DAOUser daouser,int id)
	    {
	    	daouser.setId(id);
	    	userDao.save(daouser);
	    }
}