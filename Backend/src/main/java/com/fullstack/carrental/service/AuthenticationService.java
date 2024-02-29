package com.fullstack.carrental.service;

import com.fullstack.carrental.entity.dto.SignUpRequest;

public interface AuthenticationService {
    void signUp(SignUpRequest signUpRequest);
    Long authenticate(String email, String password);
}
