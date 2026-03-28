package com.example.emp.controller;

import com.example.emp.model.Auth;
import com.example.emp.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping
    public Auth login(@RequestBody Auth auth) {
        return authService.login(auth);
    }

    @PostMapping("/register")
    public Auth register(@RequestBody Auth auth) {
        return authService.register(auth);
    }
}