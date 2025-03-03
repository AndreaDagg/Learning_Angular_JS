package com.example.ToDoList.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ToDoList.model.Item;

public interface ItemRepository extends JpaRepository <Item, Integer> {
	
	

}
