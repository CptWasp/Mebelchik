package com.RustamMebelCompany.Mebelchik.entity;

import javax.persistence.*;

@Entity
public class Mebel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String path;
    private String name;


    public Mebel(String path, String name) {
        this.path = path;
        this.name = name;
    }

    public Mebel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
