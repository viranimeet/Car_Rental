package com.fullstack.carrental.controllers;

import com.fullstack.carrental.entity.dto.CarRequest;
import com.fullstack.carrental.service.CarRequestService;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/make_request")
public class CarRequestController {

    private final CarRequestService carRequestService;

    @Autowired
    public CarRequestController(CarRequestService carRequestService) {
        this.carRequestService = carRequestService;
    }

    @PostMapping("/{carId}/{userId}")
    public ResponseEntity<CarRequest> makeRequest(@PathVariable Long carId, @PathVariable Long userId, @RequestBody CarRequest request) {
        CarRequest newRequest = carRequestService.makeRequest(carId, userId, request);
        if (newRequest != null) {
            return new ResponseEntity<>(newRequest, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Or appropriate status code
        }
    }



}
