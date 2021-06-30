package com.user.demo.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.user.demo.model.BloodRequestModel;
import com.user.demo.repository.BloodRequestRepo;

@Service
public class BloodRequestService {
@Autowired
private BloodRequestRepo bloodrepo;
@Transactional
public void addRequest(BloodRequestModel bloodrequestmodel)
{
	bloodrepo.save(bloodrequestmodel);
}
@Transactional
public List<BloodRequestModel> getall(String mail)
{
	return bloodrepo.findByEmail(mail);
}
@Transactional
public Optional<BloodRequestModel> getById(int id)
{
	return bloodrepo.findById(id);
}
@Transactional
public List<BloodRequestModel> getbystatus()
{
	return bloodrepo.findByStatus(0);
}
@Transactional
public void acceptRequest(BloodRequestModel bloodrequestModel,@PathVariable int id){
	
	bloodrequestModel.setId(id);
	bloodrepo.save(bloodrequestModel);
	
	
}
@Transactional
public void rejectRequest(BloodRequestModel bloodrequestmodel,int id){
	bloodrequestmodel.setId(id);
	bloodrepo.save(bloodrequestmodel);
	
}
}
