package com.fullstack.carrental.controllers;

import com.fullstack.carrental.entity.Car;
import com.fullstack.carrental.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CarController {
    private final CarService carService;
    @Autowired
    public CarController(CarService carService) {
        this.carService = carService;
    }
    @GetMapping("/all_cars")
    public ResponseEntity<List<Car>> getAllCars() {
        System.out.println("inside fetch all car details.");
        List<Car> cars = carService.getAllCars();
        return new ResponseEntity<>(cars, HttpStatus.OK);
    }
    @GetMapping("/cars/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable Long id) {
        System.out.println("inside fetch car details by ID: " + id);
        Car car = carService.getCarById(id);
        if (car != null) {
            return new ResponseEntity<>(car, HttpStatus.OK);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/add_car")
    public ResponseEntity<Car> addCar(@RequestBody Car car) {
        System.out.println("inside add car details.");
        Car savedCar = carService.addCar(car);
        return new ResponseEntity<>(savedCar, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete_car/{id}")
    public ResponseEntity<String> deleteCar(@PathVariable Long id) {
        System.out.println("inside delete car details.");
        boolean isDeleted = carService.deleteCar(id);
        if (isDeleted) {
            return ResponseEntity.ok("Car details with ID " + id + " deleted successfully.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/edit_car/{id}")
    public ResponseEntity<Car> editCar(@PathVariable Long id, @RequestBody Car updatedCar) {
        System.out.println("inside edit car details.");
        Car existingCar = carService.getCarById(id);
        if (existingCar == null) {
            return ResponseEntity.notFound().build();
        }
        existingCar.setCarName(updatedCar.getCarName());
        existingCar.setSeats(updatedCar.getSeats());
        existingCar.setRate(updatedCar.getRate());

        Car savedCar = carService.addCar(existingCar);
        return ResponseEntity.ok(savedCar);
    }

}
