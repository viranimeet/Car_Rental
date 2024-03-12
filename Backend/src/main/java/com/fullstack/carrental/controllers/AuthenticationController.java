package com.fullstack.carrental.controllers;


import com.fullstack.carrental.entity.dto.LoginRequest;
import com.fullstack.carrental.entity.dto.SignUpRequest;
import com.fullstack.carrental.repository.UserRepository;
import com.fullstack.carrental.service.AuthenticationService;
import jakarta.validation .Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@Valid @RequestBody SignUpRequest signUpRequest) {
        if (userRepository.findByEmail(signUpRequest.getEmail()) != null) {
            return new ResponseEntity<>("User with this email already exists", HttpStatus.BAD_REQUEST);
        }
        
        if (!signUpRequest.getPassword().equals(signUpRequest.getConfirmPassword())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Passwords do not match");
        }

        
        authenticationService.signUp(signUpRequest);
        return ResponseEntity.ok("User registered successfully");
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        System.out.println("inside login controller");
        Long isAuthenticated = authenticationService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());

        if (isAuthenticated != -1) {
//            return ResponseEntity.("Login successful!",isAuthenticated);
            return new ResponseEntity(isAuthenticated, HttpStatus.OK);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect email or password.");
        }
    }
}
