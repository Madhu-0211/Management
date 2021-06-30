package com.user.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.user.demo.model.DAOUser;

@Repository
public interface UserRepository extends JpaRepository<DAOUser,Integer> {
	DAOUser findByUsername(String username);

}
