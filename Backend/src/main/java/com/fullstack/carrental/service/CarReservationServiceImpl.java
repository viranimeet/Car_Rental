package com.fullstack.carrental.service;

import com.fullstack.carrental.entity.Car;
import com.fullstack.carrental.entity.CarReservation;
import com.fullstack.carrental.entity.CarReservationStatusHistory;
import com.fullstack.carrental.entity.User;
import com.fullstack.carrental.entity.dto.CarReservationDto;
import com.fullstack.carrental.repository.CarReservationRepository;
import com.fullstack.carrental.repository.CarRepository;
import com.fullstack.carrental.repository.CarReservationStatusHistoryRepository;
import com.fullstack.carrental.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CarReservationServiceImpl implements CarReservationService {

    private final CarReservationRepository carReservationRepository;
    private final CarRepository carRepository;
    private final UserRepository userRepository;
    private final CarReservationStatusHistoryRepository statusHistoryRepository;

    @Autowired
    public CarReservationServiceImpl(CarReservationRepository carReservationRepository, CarRepository carRepository, UserRepository userRepository, CarReservationStatusHistoryRepository statusHistoryRepository) {
        this.carReservationRepository = carReservationRepository;
        this.carRepository = carRepository;
        this.userRepository = userRepository;
        this.statusHistoryRepository = statusHistoryRepository;
    }

    @Override
    public List<CarReservationDto> getAllReservationsWithDetails() {
        List<CarReservationDto> reservationDtos = new ArrayList<>();
        List<CarReservation> reservations = carReservationRepository.findAll();

        for (CarReservation reservation : reservations) {
            Car car = carRepository.findById(reservation.getCarId()).orElse(null);
            User user = userRepository.findById(reservation.getUserId()).orElse(null);

            if (car != null && user != null) {
                CarReservationDto dto = new CarReservationDto();
                dto.setCarName(car.getCarName());
                dto.setCarId(car.getId());
                dto.setUserEmail(user.getEmail());
                dto.setUserId(user.getId());
                dto.setStartDate(reservation.getStartDate());
                dto.setEndDate(reservation.getEndDate());
                reservationDtos.add(dto);
            }
        }

        return reservationDtos;
    }

    @Override
    public List<CarReservationDto> getPendingReservations() {
        List<CarReservationDto> pendingReservationDtos = new ArrayList<>();
        List<CarReservation> pendingReservations = carReservationRepository.findByStatus("pending");

        for (CarReservation reservation : pendingReservations) {
            Car car = carRepository.findById(reservation.getCarId()).orElse(null);
            User user = userRepository.findById(reservation.getUserId()).orElse(null);

            if (car != null && user != null) {
                CarReservationDto dto = new CarReservationDto();
                dto.setId(reservation.getId());
                dto.setCarName(car.getCarName());
                dto.setCarId(car.getId());
                dto.setUserEmail(user.getEmail());
                dto.setUserId(user.getId());
                dto.setStartDate(reservation.getStartDate());
                dto.setEndDate(reservation.getEndDate());
                pendingReservationDtos.add(dto);
            }
        }

        return pendingReservationDtos;
    }

public CarReservation addCarReservation(CarReservationDto reservationDto,Long id) {
    CarReservation reservation = new CarReservation();
    reservation.setId(id);
    reservation.setUserId(reservationDto.getUserId());
    reservation.setCarId(reservationDto.getCarId());
    reservation.setStartDate(reservationDto.getStartDate());
    reservation.setEndDate(reservationDto.getEndDate());
    reservation.setStatus("pending");


    CarReservation savedReservation = carReservationRepository.save(reservation);


    return savedReservation;
}


    @Override
    public CarReservation acceptReservation(Long reservationId) {
        Optional<CarReservation> optionalReservation = carReservationRepository.findById(reservationId);
        if (optionalReservation.isPresent()) {
            CarReservation reservation = optionalReservation.get();

            // Update status of the reservation
            reservation.setStatus("accepted");
            CarReservation savedReservation = carReservationRepository.save(reservation);

            // Create entry in status history
//            CarReservationStatusHistory statusHistory = new CarReservationStatusHistory();
//            statusHistory.setReservation(savedReservation);
//            statusHistory.setStatus("accepted");
//            statusHistory.setChangeDate(new Date());
//            statusHistoryRepository.save(statusHistory);

            return savedReservation;
        }
        return null;
    }

    @Override
    public CarReservation declineReservation(Long reservationId) {
        Optional<CarReservation> optionalReservation = carReservationRepository.findById(reservationId);
        if (optionalReservation.isPresent()) {
            CarReservation reservation = optionalReservation.get();

            // Update status of the reservation
            reservation.setStatus("rejected");
            CarReservation savedReservation = carReservationRepository.save(reservation);
            return savedReservation;
        }
        return null;
    }
    @Override
    public List<CarReservation> getUserReservations(Long userId) {
        List<CarReservation> userReservations = new ArrayList<>();
        List<CarReservation> reservations = carReservationRepository.findByUserId(userId);
        for (CarReservation reservation : reservations) {
            Long carId = reservation.getCarId();
            Car car = carRepository.findById(carId).orElse(null);
            if (car != null) {
                reservation.setCarName(car.getCarName());
            }
            userReservations.add(reservation);
        }
        return userReservations;
    }




}
