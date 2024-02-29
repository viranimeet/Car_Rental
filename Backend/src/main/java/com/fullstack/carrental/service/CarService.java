package com.fullstack.carrental.service;

import com.fullstack.carrental.entity.Car;
import java.util.List;

public interface CarService {
    List<Car> getAllCars();
    Car getCarById(Long id);
    Car addCar(Car car);
    Car updateCar(Long id, Car car);
    boolean deleteCar(Long id);
}
