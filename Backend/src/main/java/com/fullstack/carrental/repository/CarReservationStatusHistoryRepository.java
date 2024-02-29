package com.fullstack.carrental.repository;

import com.fullstack.carrental.entity.CarReservation;
import com.fullstack.carrental.entity.CarReservationStatusHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public interface CarReservationStatusHistoryRepository extends JpaRepository<CarReservationStatusHistory, Long> {
    @Transactional
    void deleteByReservation(CarReservation reservation);
}
