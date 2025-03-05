package com.example.ToDoList.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.example.ToDoList.View.itemTranslatedView;

public interface ItemTranslatedViewRepository
        extends JpaRepository<itemTranslatedView, Integer>, JpaSpecificationExecutor<itemTranslatedView> {

}
