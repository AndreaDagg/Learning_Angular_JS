package com.example.ToDoList.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ToDoList.model.itemTranslate;

public interface ItemTranslateRepository extends JpaRepository<itemTranslate, Integer>{
	
	itemTranslate findByIdIta(Integer idIta); 

}
