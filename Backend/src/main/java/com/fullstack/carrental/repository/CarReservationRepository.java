package com.fullstack.carrental.repository;

import com.fullstack.carrental.entity.CarReservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarReservationRepository extends JpaRepository<CarReservation, Long> {
    List<CarReservation> findByStatus(String status);
    List<CarReservation> findByUserId(Long userId);
}
