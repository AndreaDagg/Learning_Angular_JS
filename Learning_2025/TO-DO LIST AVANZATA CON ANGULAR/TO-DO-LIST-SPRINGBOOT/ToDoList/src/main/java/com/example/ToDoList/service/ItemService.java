package com.example.ToDoList.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.ToDoList.model.Item;
import com.example.ToDoList.repository.ItemRepository;

@Service
public class ItemService {
	private final ItemRepository itemRepository;
	
	public ItemService(ItemRepository itemRepository) {
		this.itemRepository = itemRepository; 
	}
	
	public List<Item> getItems(){
		return itemRepository.findAll();
	}

	public void insertItem(Item item) {
		itemRepository.save(item);
	}

	public Item getItemById(Integer id) {
		return itemRepository.findById(id).orElseThrow(() -> new IllegalStateException(id + "not found"));
	}
}

