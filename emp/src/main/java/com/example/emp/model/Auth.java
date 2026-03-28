package com.example.emp.model;



import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Auth {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    private String password;

    private String role;
}