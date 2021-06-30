package com.user.demo.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.demo.model.NewdonorModel;

import com.user.demo.repository.NewDonorRepo;

@Service
public class NewdonorService {
@Autowired
private NewDonorRepo newdonor;

@Transactional
public void addDonor(NewdonorModel newdonorModel)
{
	newdonor.save(newdonorModel);
}

@Transactional
public List<NewdonorModel> getDonor() 
{
	newdonor.deleteAfter90days();
	return newdonor.findByStatus(1);
}
@Transactional
public Optional<NewdonorModel> getById(int id)
{
	return newdonor.findById(id);
}
@Transactional
public List<NewdonorModel> getBystatus()
{
	return newdonor.findByStatus(0);
}
@Transactional
public List<NewdonorModel> findby(String bloodgroup)
{
	return newdonor.findByBloodgroup(bloodgroup);
}
@Transactional
public void deleteDonor(int id)
{
	NewdonorModel newdonormodel=newdonor.getOne(id);
	newdonor.delete(newdonormodel);
}
@Transactional
public void updateDonor(NewdonorModel newdonorModel,int id)
{
	newdonorModel.setId(id);
	newdonor.save(newdonorModel);
}
@Transactional
public void acceptDonor(NewdonorModel newdonorModel,int id)
{ 
	newdonorModel.setId(id);
	newdonor.save(newdonorModel);
	
}
@Transactional
public void rejectDonor(int id)
{
	NewdonorModel newdonormodel=newdonor.getOne(id);
	newdonor.delete(newdonormodel);
}
}
