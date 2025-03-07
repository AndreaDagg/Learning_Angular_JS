package com.example.ToDoList.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.ToDoList.View.itemTranslatedView;
import com.example.ToDoList.dto.ItemDTO;
import com.example.ToDoList.dto.ItemUpdateDTO;
import com.example.ToDoList.model.Item;
import com.example.ToDoList.model.itemTranslate;
import com.example.ToDoList.repository.ItemRepository;
import com.example.ToDoList.repository.ItemTranslatedViewRepository;

@Service
public class ItemService {
	private final ItemRepository itemRepository;
	private final ItemTranslatedViewRepository itemTranslatedViewRepository;
	
	public ItemService(ItemRepository itemRepository, ItemTranslatedViewRepository itemTranslatedViewRepository) {
		this.itemRepository = itemRepository; 
		this.itemTranslatedViewRepository = itemTranslatedViewRepository;
	}
	
	public List<ItemDTO> all(ItemDTO entity) {

		if (entity.isEnglish()) {
			// creare predicato in specification per andare verso la vista			
		} else {
			// creare predicato in specification per andare verso la tabella
		}

		return null; 
	}

	public List<Item> getItems(){
		return itemRepository.findAll();
	}

	public List<itemTranslatedView> getItemsTranslated() {
		return itemTranslatedViewRepository.findAll();
	}

	public void insertItem(Item item) {
		itemRepository.save(item);
	}

	public Item getItemById(Integer id) {
		return itemRepository.findById(id).orElseThrow(() -> new IllegalStateException(id + "not found"));
	}
	
	public void updateDoneItem(ItemUpdateDTO itemUpdateDTO) {
		Integer id = itemUpdateDTO.getId();
		Boolean done = itemUpdateDTO.getDone();
		Item item = itemRepository.findById(id).orElseThrow(() -> new IllegalStateException(id + "not found"));
		item.setDone(done);
		itemRepository.save(item);
	}
	
	public void deleteItem(Integer id) {
		Item item = itemRepository.findById(id).orElseThrow(() -> new IllegalStateException(id + "not found"));
		itemRepository.delete(item);
	}
}