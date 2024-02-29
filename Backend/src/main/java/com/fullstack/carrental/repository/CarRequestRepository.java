package com.fullstack.carrental.repository;

import com.fullstack.carrental.entity.dto.CarRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRequestRepository extends JpaRepository<CarRequest, Long> {
}
