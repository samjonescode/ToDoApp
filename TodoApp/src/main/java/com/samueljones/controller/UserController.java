package com.samueljones.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.samueljones.dao.UserImpl;
import com.samueljones.model.User;

@RestController
public class UserController {
	
	private UserImpl ui;
	
	@Autowired
	public void setUserImpl(UserImpl ui) {
		this.ui = ui;
	}
	
	@PostMapping("/register")
	public ResponseEntity<User> registerUser(@RequestBody User user){
		ui.register(user);
		return ResponseEntity.ok().body(user);
	}
	
	@GetMapping("/allUsers")
	public ResponseEntity<List<User>> getAllUsers(@RequestBody User user){
		List<User> users = ui.getAllUsers();
		return ResponseEntity.ok().body(users);
	}
	
	@PutMapping("/updateUser")
	public ResponseEntity<User> updateUser(@RequestBody User user){
		ui.updateUser(user);
		return ResponseEntity.ok().body(user);
	}

	@PatchMapping("/patchUser/{id}")
	public ResponseEntity<User> updateUser(@PathVariable("id") int id, @RequestBody User user){
		ui.updateUser(user);
		return ResponseEntity.ok().body(user);
	}
	
}
