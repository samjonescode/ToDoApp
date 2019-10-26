package com.samueljones.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ToDoItem {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column
	private String text;
	
	@Column
	private Boolean isComplete;

	@Column
	private Date submittedAt;
	
	@Column
	private Date completedAt;
	
	
	public Date getCompletedAt() {
		return completedAt;
	}

	public void setCompletedAt(Date completedAt) {
		this.completedAt = completedAt;
	}

	public Date getSubmittedAt() {
		return submittedAt;
	}

	public void setSubmittedAt(Date submittedAt) {
		this.submittedAt = submittedAt;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Boolean getIsComplete() {
		return isComplete;
	}

	public void setIsComplete(Boolean isComplete) {
		this.isComplete = isComplete;
	}
	
	public ToDoItem() {
	}

	public ToDoItem(String text) {
		super();
		this.text = text;
	}

	public ToDoItem(String text, Boolean isComplete) {
		super();
		this.text = text;
		this.isComplete = isComplete;
	}

	@Override
	public String toString() {
		return "ToDoItem [id=" + id + ", text=" + text + ", isComplete=" + isComplete + "]";
	}
	
	
	
	
}
