package com.user.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.user.demo.model.BloodRequestModel;
import com.user.demo.model.NewdonorModel;
import com.user.demo.service.BloodRequestService;

@CrossOrigin(origins ="http://localhost:4200")

@RestController
public class BloodRequestController {
	@Autowired
	BloodRequestService bloodrequestservice;
	@RequestMapping("/bloodrequest")
	public ResponseEntity<HttpStatus> addRequest(@RequestBody BloodRequestModel bloodrequestmodel) {
		bloodrequestservice.addRequest(bloodrequestmodel);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@GetMapping("/getall/{mail}")
	public List<BloodRequestModel> getall(@PathVariable String mail)
	{
		return bloodrequestservice.getall(mail);
	}
	@GetMapping("/getById/{id}")
	public Optional<BloodRequestModel> getById(@PathVariable int id)
	{
		return bloodrequestservice.getById(id);
	}
	@GetMapping("/checkrequest")
	public List<BloodRequestModel>getbystatus()
	{
		return bloodrequestservice.getbystatus();
	}
	@RequestMapping("/checkrequest/accept/{id}")
	public ResponseEntity<HttpStatus> acceptRequest(@RequestBody BloodRequestModel bloodrequestModel,@PathVariable int id){
		
		bloodrequestservice.acceptRequest(bloodrequestModel,id);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@RequestMapping("/checkrequest/reject/{id}")
	public ResponseEntity<HttpStatus> rejectRequest(@RequestBody BloodRequestModel bloodrequestmodel,@PathVariable int id){
		
		bloodrequestservice.rejectRequest(bloodrequestmodel,id);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
