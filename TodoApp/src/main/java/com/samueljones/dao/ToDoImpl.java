package com.samueljones.dao;

import java.sql.Date;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.samueljones.model.ToDoItem;

@Repository
@Transactional
public class ToDoImpl {
	
	private SessionFactory sf;
	
	@Autowired
	public void setSessionFactory(SessionFactory sf) {
		this.sf = sf;
	}
	public List<ToDoItem> getAllToDos(){
		return sf.getCurrentSession().createQuery("from ToDoItem", ToDoItem.class).list();
		
	}
	
	public ToDoItem addToDo(ToDoItem todo) {
		sf.getCurrentSession().saveOrUpdate(todo);
		return todo;
	}
	
	//update
	public ToDoItem updateToDo(ToDoItem todo) {
		sf.getCurrentSession().merge(todo);
		return todo;
	}
	
	//delete
	public ToDoItem deleteToDo(ToDoItem todo) {
		sf.getCurrentSession().delete(todo);
		return todo;
	}
	
	//delete by id
	public void deleteById(int id) {
		ToDoItem deleteMe = sf.getCurrentSession().get(ToDoItem.class,id);
		sf.getCurrentSession().delete(deleteMe);
	}
	
	//delete all
	public void deleteAll() {
		sf.getCurrentSession().createQuery("delete from ToDoItem").executeUpdate();
	}
}
