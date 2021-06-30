package com.user.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.user.demo.model.BloodRequestModel;
import com.user.demo.model.NewdonorModel;

@Repository
public interface BloodRequestRepo extends JpaRepository<BloodRequestModel,Integer> {
	List<BloodRequestModel> findByEmail(String email);
	List<BloodRequestModel> findByStatus(int status);
}
