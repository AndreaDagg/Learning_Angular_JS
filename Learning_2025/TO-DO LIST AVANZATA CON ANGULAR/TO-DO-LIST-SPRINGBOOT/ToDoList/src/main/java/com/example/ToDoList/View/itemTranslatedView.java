package com.example.ToDoList.View;

import org.hibernate.annotations.Immutable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "VIEW_item_translated")
@Immutable
public class itemTranslatedView {

    /*
    Query per la creazione della view nel db    
    CREATE VIEW VIEW_item_translated AS SELECT  I.ID AS id, T.TITLE_EN AS TITLE_EN, T.DESCRIPTION_EN AS DESCRIPTION_EN , I.CATEGORY AS CATEGORY, I.DONE AS DONE FROM ITEMS I JOIN TODO_ITEMS_TRANSLATED T ON I.ID = T.ID_ITA
    */

    @Id
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;
    @Column(name = "TITLE", nullable = false)
    private String title; 
    @Column(name = "DESCRIPTION", nullable = false)
    private String description;
    @Column(name = "CATEGORY", nullable = false)
    private String category;
    @Column(name = "DONE", nullable = false)
    private boolean done;





    
    public itemTranslatedView() {
    }

    public itemTranslatedView(Integer id, String title, String decsription, String category, boolean done) {
        this.id = id;
        this.title = title;
        this.description = decsription;
        this.category = category;
        this.done = done;
    }
    
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String decsription) {
        this.description = decsription;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public boolean isDone() {
        return done;
    }
    public void setDone(boolean done) {
        this.done = done;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((title == null) ? 0 : title.hashCode());
        result = prime * result + ((description == null) ? 0 : description.hashCode());
        result = prime * result + ((category == null) ? 0 : category.hashCode());
        result = prime * result + (done ? 1231 : 1237);
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        itemTranslatedView other = (itemTranslatedView) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (title == null) {
            if (other.title != null)
                return false;
        } else if (!title.equals(other.title))
            return false;
        if (description == null) {
            if (other.description != null)
                return false;
        } else if (!description.equals(other.description))
            return false;
        if (category == null) {
            if (other.category != null)
                return false;
        } else if (!category.equals(other.category))
            return false;
        if (done != other.done)
            return false;
        return true;
    }



}
