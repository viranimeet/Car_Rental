package com.fullstack.carrental.service;

import com.fullstack.carrental.entity.CarReservation;
import com.fullstack.carrental.entity.dto.CarReservationDto;

import java.util.List;

public interface CarReservationService {
    CarReservation addCarReservation(CarReservationDto reservationDto,Long id);
    List<CarReservationDto> getAllReservationsWithDetails();
    CarReservation acceptReservation(Long reservationId);
    CarReservation declineReservation(Long reservationId);
    List<CarReservationDto> getPendingReservations();
    List<CarReservation> getUserReservations(Long userId);
}

