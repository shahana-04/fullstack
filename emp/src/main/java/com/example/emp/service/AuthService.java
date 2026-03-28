package com.example.emp.service;



import com.example.emp.model.Auth;
import com.example.emp.repository.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private AuthRepository authRepository;

    public Auth login(Auth auth) {

        return authRepository
                .findByEmail(auth.getEmail())
                .filter(u -> u.getPassword().equals(auth.getPassword()))
                .orElse(null);
    }

    public Auth register(Auth auth) {
        return authRepository.save(auth);
    }
}