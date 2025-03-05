package com.example.ToDoList.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.ToDoList.model.itemTranslate;
import com.example.ToDoList.repository.ItemTranslateRepository;

@Service
public class ItemTranslateService {

	private final ItemTranslateRepository itemTranslateRepository;
	
	public ItemTranslateService(ItemTranslateRepository itemTranslateRepository) {
		this.itemTranslateRepository = itemTranslateRepository;
		
	}
	
	
	public List<itemTranslate> getItems(){
		return itemTranslateRepository.findAll(); 
	}
	
	public void delete(Integer id) {
		itemTranslate itemTranslate = itemTranslateRepository.findByIdIta(id);
		itemTranslateRepository.delete(itemTranslate);
	}
	
}
