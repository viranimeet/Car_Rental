package com.fullstack.carrental.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "cars")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "car_name")
    private String carName;

    @Column(name = "seats")
    private int seats;

    @Column(name = "rate")
    private double rate;
    @Column(name = "fuel_type")
    private String fuelType;

    @Column(name = "car_description")
    private String carDescription;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public String getCarDescription() {
        return carDescription;
    }

    public void setCarDescription(String carDescription) {
        this.carDescription = carDescription;
    }

    public Car() {
    }

    public Car(Long id, String carName, int seats, double rate, String fuelType, String carDescription) {
        this.id = id;
        this.carName = carName;
        this.seats = seats;
        this.rate = rate;
        this.fuelType = fuelType;
        this.carDescription = carDescription;
    }



    // Add image/photo logic here


}
