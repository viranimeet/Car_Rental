package com.fullstack.carrental.service;

import com.fullstack.carrental.entity.dto.CarRequest;

public interface CarRequestService {
    CarRequest makeRequest(Long carId, Long userId, CarRequest request);

}
