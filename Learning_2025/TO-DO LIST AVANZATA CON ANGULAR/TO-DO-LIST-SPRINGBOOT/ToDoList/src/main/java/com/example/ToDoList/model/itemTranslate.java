package com.example.ToDoList.model;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="todo_items_translated ")
public class itemTranslate {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id; 
	@Column(name = "ID_ITA")
	private Integer idIta; 
	@Column(name = "TITLE_EN")
	private String titleEn; 
	@Column(name = "DESCRIPTION_EN")
	private String descriptionEn;
	
	
	
	
	
	public itemTranslate(Integer id, Integer idIta, String titleEn, String descriptionEn) {
		super();
		this.id = id;
		this.idIta = idIta;
		this.titleEn = titleEn;
		this.descriptionEn = descriptionEn;
	}


	public itemTranslate() {}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Integer getIdIta() {
		return idIta;
	}


	public void setIdIta(Integer idIta) {
		this.idIta = idIta;
	}


	public String getTitleEn() {
		return titleEn;
	}


	public void setTitleEn(String titleEn) {
		this.titleEn = titleEn;
	}


	public String getDescriptionEn() {
		return descriptionEn;
	}


	public void setDescriptionEn(String descriptionEn) {
		this.descriptionEn = descriptionEn;
	}


	@Override
	public int hashCode() {
		return Objects.hash(descriptionEn, id, idIta, titleEn);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		itemTranslate other = (itemTranslate) obj;
		return Objects.equals(descriptionEn, other.descriptionEn) && Objects.equals(id, other.id)
				&& Objects.equals(idIta, other.idIta) && Objects.equals(titleEn, other.titleEn);
	}
	
	

	
	

}
