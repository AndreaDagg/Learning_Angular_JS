package com.example.ToDoList.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.ToDoList.model.itemTranslate;
import com.example.ToDoList.service.ItemTranslateService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/itemTranslateController")
public class ItemTranslateController {
	
	@Autowired
	private ItemTranslateService itemTranslateService;
	
	@GetMapping
	public  List<itemTranslate> getItemsTranslate(){
		return itemTranslateService.getItems(); 
	}
	
	@DeleteMapping("/deleteItemTranslated")
	public void deleteItemTranslate(@RequestParam Integer id) {
		itemTranslateService.delete(id); 
	}

}
