package com.controller;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entities.User;
import com.service.UserService;


@RestController
@CrossOrigin(origins = "http://localhost:50762")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/getUser")
	public ResponseEntity <List<User>>getUser()
	{
		List<User> list = userService.getAllData();
		if(list.size() <= 0)
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(list);
	}
	
	
	@GetMapping("/getUserById/{id}")
	public ResponseEntity<User> getData(@PathVariable("id") int id)
	{
		User user = userService.getDataById(id);
		if(user == null)
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(user));
	}
	
	
	@PostMapping("/createUser")
	ResponseEntity<User> addData(@RequestBody User user){
		
		return new ResponseEntity<User>(userService.addData(user),HttpStatus.CREATED);
	}
//	@PostMapping("/createUser")
//	public ResponseEntity<Optional<User>> addData(@RequestBody User user)
//	{
//		User u =null;
//		try {
//			u=	this.userService.addData(user);
//			System.out.println(user);
//			return ResponseEntity.ok(Optional.of(u));
//		} catch (Exception e) {
//			e.printStackTrace();
//			 return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//		}	}
	
	@DeleteMapping("/deleteUser/{id}")
	public void deleteData(@PathVariable("id") int id)
	{
		this.userService.deleteData(id);
	}
	
	@PutMapping("/updateUser/{id}")
	public User updateData(@RequestBody User user,@PathVariable("id") int id)
	{
		this.userService.updateData(user, id);
		return user;
	}
	
	
	
}
