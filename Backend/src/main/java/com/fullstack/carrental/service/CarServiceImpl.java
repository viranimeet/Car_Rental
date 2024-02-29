package com.fullstack.carrental.service;

import com.fullstack.carrental.entity.Car;
import com.fullstack.carrental.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepository carRepository;

    @Override
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    @Override
    public Car getCarById(Long id) {
        return carRepository.findById(id).orElse(null);
    }

    @Override
    public Car addCar(Car car) {
        return carRepository.save(car);
    }

    @Override
    public Car updateCar(Long id, Car car) {
        if (carRepository.existsById(id)) {
            car.setId(id); // Ensure the correct ID is set for update
            return carRepository.save(car);
        }
        return null; // Or throw an exception for not found
    }

    @Override
    public boolean deleteCar(Long id) {
        if (carRepository.existsById(id)) {
            carRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
