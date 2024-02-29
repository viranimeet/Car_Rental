package com.fullstack.carrental.service;

import com.fullstack.carrental.entity.User;
import com.fullstack.carrental.entity.dto.SignUpRequest;
import com.fullstack.carrental.repository.AuthenticationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    @Autowired
    private AuthenticationRepository authenticationRepository;

    @Override
    public void signUp(SignUpRequest signUpRequest) {
        User user = new User();
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(signUpRequest.getPassword()); // Set password directly

        authenticationRepository.save(user);
    }
    @Override
    public Long authenticate(String email, String password) {
        User user = authenticationRepository.findByEmail(email);

        return user != null && user.getPassword().equals(password) ? user.getId() : -1;
    }

}
