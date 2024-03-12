package com.fullstack.carrental.controllers;

import com.fullstack.carrental.entity.CarReservation;
import com.fullstack.carrental.entity.dto.CarReservationDto;
import com.fullstack.carrental.service.CarReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CarReservationController {

    private final CarReservationService carReservationService;

    @Autowired
    public CarReservationController(CarReservationService carReservationService) {
        this.carReservationService = carReservationService;
    }
    @GetMapping("/user/{userId}/reservations")
    public ResponseEntity<List<CarReservation>> getUserReservations(@PathVariable Long userId) {
        List<CarReservation> userReservations = carReservationService.getUserReservations(userId);
        return ResponseEntity.ok(userReservations);
    }

    @PostMapping("/car_reservations/{id}")
    public ResponseEntity<CarReservation> addCarReservation(@RequestBody CarReservationDto reservationDto,@PathVariable Long id) {
        reservationDto.setId(id);
        CarReservation savedReservation = carReservationService.addCarReservation(reservationDto,id);
        return new ResponseEntity<>(savedReservation, HttpStatus.CREATED);
    }

    @GetMapping("/pending-requests")
    public ResponseEntity<List<CarReservationDto>> getPendingRequests() {
        List<CarReservationDto> pendingRequests = carReservationService.getPendingReservations();
        return ResponseEntity.ok(pendingRequests);
    }
    @PutMapping("/{reservationId}/accept")
    public ResponseEntity<CarReservation> acceptReservation(@PathVariable Long reservationId) {
        CarReservation acceptedReservation = carReservationService.acceptReservation(reservationId);
        if (acceptedReservation != null) {
            return new ResponseEntity<>(acceptedReservation, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{reservationId}/decline")
    public ResponseEntity<CarReservation> declineReservation(@PathVariable Long reservationId) {
        CarReservation declinedReservation = carReservationService.declineReservation(reservationId);
        if (declinedReservation != null) {
            return new ResponseEntity<>(declinedReservation, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

