package com.samueljones.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.samueljones.dao.ToDoImpl;
import com.samueljones.model.ToDoItem;

@RestController
@CrossOrigin
public class ToDoItemController {
	
	private ToDoImpl tdi;
	
	@Autowired
	public void setTdi(ToDoImpl tdi) {
		this.tdi = tdi;
	}
	//retrieves all todos
	@GetMapping("/allToDos")
	public ResponseEntity<List<ToDoItem>> allToDos(){
		List<ToDoItem> list = tdi.getAllToDos();
		return ResponseEntity.ok().body(list);
		
	}
	
	public ToDoImpl getTdi() {
		return tdi;
	}



	//creates a todo
	@PostMapping("/addToDo")
	public ResponseEntity<ToDoItem> addToDo(@RequestBody ToDoItem todo){
		Date subAt = new Date(System.currentTimeMillis());
		todo.setSubmittedAt(subAt);
		todo.setIsComplete(false);
		tdi.addToDo(todo);
		return ResponseEntity.ok().body(todo);
	}
	
	//updates one todo, sets the time it was completed
	@PutMapping("/updateToDo")
	public ResponseEntity<ToDoItem> updateToDo(@RequestBody ToDoItem todo){
		Date date = new Date(System.currentTimeMillis());
		todo.setCompletedAt(date);
		tdi.updateToDo(todo);
		return ResponseEntity.ok().body(todo);
	}
	
	//deletes a todo - works from postman but not angular side.
	@DeleteMapping("/deleteToDo")
	public ResponseEntity<ToDoItem> deleteToDo(@RequestBody ToDoItem todo){
		tdi.deleteToDo(todo);
		return ResponseEntity.ok().body(todo);
	}
	
	//delete a todo by id - works from angular side.
	@DeleteMapping("/deleteById/{id}")
	public ResponseEntity<String> deleteById(@PathVariable("id") int id){
		tdi.deleteById(id);
		return ResponseEntity.ok().body("Deleted successfully the ID of " + id);
	}
	
	//deletes all todos from angular
	@DeleteMapping("/deleteAll")
	public ResponseEntity<String> deleteAll(){
		tdi.deleteAll();
		return ResponseEntity.ok().body("Deleted all todos successfully");
	}
	
}
