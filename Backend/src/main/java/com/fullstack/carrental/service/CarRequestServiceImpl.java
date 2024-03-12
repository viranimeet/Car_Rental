package com.fullstack.carrental.service;

import com.fullstack.carrental.entity.Car;
import com.fullstack.carrental.entity.User;
import com.fullstack.carrental.entity.dto.CarRequest;
import com.fullstack.carrental.repository.AuthenticationRepository;
import com.fullstack.carrental.repository.CarRepository;
import com.fullstack.carrental.repository.CarRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;


@Service
public class CarRequestServiceImpl implements CarRequestService {

    private final CarRequestRepository carRequestRepository;
    private final CarRepository carRepository;
    private final AuthenticationRepository authenticationRepository;

    @Autowired
    public CarRequestServiceImpl(CarRequestRepository carRequestRepository, CarRepository carRepository, AuthenticationRepository authenticationRepository) {
        this.carRequestRepository = carRequestRepository;
        this.carRepository = carRepository;
        this.authenticationRepository = authenticationRepository;
    }

    @Override
    public CarRequest makeRequest(Long carId, Long userId, CarRequest request) {
        Optional<Car> optionalCar = carRepository.findById(carId);
        Optional<User> optionalUser = authenticationRepository.findById(userId);

        if (optionalCar.isPresent() && optionalUser.isPresent()) {
            Car car = optionalCar.get();
            User user = optionalUser.get();
            
            request.setCar(car);
            request.setUser(user);

            
            return carRequestRepository.save(request);
        } else {
            return null;
        }
    }

}


