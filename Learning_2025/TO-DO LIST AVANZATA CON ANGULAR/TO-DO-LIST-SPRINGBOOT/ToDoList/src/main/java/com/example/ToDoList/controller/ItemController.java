package com.example.ToDoList.controller;

import com.example.ToDoList.service.ItemService;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ToDoList.model.Item;

@RestController
@RequestMapping("api/itemController")
public class ItemController {
	
	@Autowired
	private ItemService itemService; 
	
	@GetMapping
	public List<Item> getItems(){
		return itemService.getItems();
	}
	
	@GetMapping("{id}")
	public Item getItemsById(@PathVariable Integer id){
		return itemService.getItemById(id);
	}
	
	@PostMapping
	public void addNewItem(Item item) {
		itemService.insertItem(item); 
	}

}
