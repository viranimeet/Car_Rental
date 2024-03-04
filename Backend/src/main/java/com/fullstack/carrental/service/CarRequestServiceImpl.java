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
    private final AuthenticationRepository authenticationRepository; // Assuming UserRepository exists for user-related operations

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
            // Set car and user references in the request
            request.setCar(car);
            request.setUser(user);

            // Save the request
            return carRequestRepository.save(request);
        } else {
            // Handle case when car or user is not found
            return null;
        }
    }

}

//
//@Service
//public class CarRequestServiceImpl implements CarRequestService {
//
//    private final CarRequestRepository carRequestRepository;
//    private final CarRepository carRepository;
//
//    @Autowired
//    public CarRequestServiceImpl(CarRequestRepository carRequestRepository, CarRepository carRepository) {
//        this.carRequestRepository = carRequestRepository;
//        this.carRepository = carRepository;
//    }
//
//    @Override
//    public CarRequest makeRequest(Long carId, CarRequest request) {
//        Optional<Car> optionalCar = carRepository.findById(carId);
//        if (optionalCar.isPresent()) {
//            Car car = optionalCar.get();
//            // Set car reference in the request
//            request.setCar(car);
//            // Save the request
//            return carRequestRepository.save(request);
//        } else {
//            // Handle case when car is not found
//            return null;
//        }
//    }
//}
