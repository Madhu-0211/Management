package com.user.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.user.demo.model.NewdonorModel;
import com.user.demo.repository.NewDonorRepo;
import com.user.demo.service.NewdonorService;
@CrossOrigin(origins ="http://localhost:4200")

@RestController
public class UserController {
	@Autowired
	NewdonorService donorService;
	@GetMapping("/home")
	public List<NewdonorModel> getDonor()
	{
		return donorService.getDonor();
	}
	@RequestMapping({"/user"})
	public ResponseEntity<HttpStatus> addDonor(@RequestBody NewdonorModel newdonorModel){
		donorService.addDonor(newdonorModel);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@DeleteMapping("/home/delete/{id}")
	public String deleteDonor(@PathVariable int id){
		donorService.deleteDonor(id);
		return "Deleted";
	}
	@DeleteMapping("/donorrequest/reject/{id}")
	public ResponseEntity<HttpStatus> rejectDonor(@PathVariable int id){
		donorService.rejectDonor(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@RequestMapping("/edit/{id}")
	public ResponseEntity<HttpStatus> updateDonor(@RequestBody NewdonorModel newdonorModel,@PathVariable int id){
		donorService.updateDonor(newdonorModel,id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@RequestMapping("/donorrequest/accept/{id}")
	public ResponseEntity<HttpStatus> acceptDonor(@RequestBody NewdonorModel newdonorModel,@PathVariable int id){
		
		donorService.acceptDonor(newdonorModel,id);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	@GetMapping({"/edit/{id}"})
	public Optional<NewdonorModel> getById(@PathVariable int id){
		return donorService.getById(id);
	}
	@GetMapping({"/home/findby/{bloodgroup}"})
	public List<NewdonorModel> findby(@PathVariable String bloodgroup){
		return donorService.findby(bloodgroup);
	}
	@GetMapping("/donorrequest")
	public List<NewdonorModel> getBystatus()
	{
		return donorService.getBystatus();
	}
	
	


}

