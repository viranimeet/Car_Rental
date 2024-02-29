package com.fullstack.carrental.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "car_reservations")
public class CarReservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "car_id")
    private Long carId;
    @Column(name = "status", nullable = false)
    private String status;
    private String carName;
//    @ManyToOne
//    @JoinColumn(name = "car_id")
//    private Car car;
    public CarReservation() {
    }

    public CarReservation(Long id, Date startDate, Date endDate, Long userId, Long carId, String status, String carName) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.userId = userId;
        this.carId = carId;
        this.status = status;
        this.carName = carName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getCarId() {
        return carId;
    }

    public void setCarId(Long carId) {
        this.carId = carId;
    }
// Getters and setters

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }


}
