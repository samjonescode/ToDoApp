package com.samueljones.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.samueljones.model.User;

@Repository
@Transactional
public class UserImpl {

	@Autowired
	private SessionFactory sf;
	
	public void setSessionFactory(SessionFactory sf) {
		this.sf = sf;
	}
	
	public User register(User user) {
		sf.getCurrentSession().save(user);
		return user;
	}
	
	public List<User> getAllUsers(){
		return sf.getCurrentSession().createQuery("from User", User.class).list();
	}
	
	public void updateUser(User user) {
		sf.getCurrentSession().merge(user);
	}
}
