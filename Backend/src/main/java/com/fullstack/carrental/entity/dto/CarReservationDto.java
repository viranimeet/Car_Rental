package com.fullstack.carrental.entity.dto;

import java.util.Date;

public class CarReservationDto {
    private String carName;
    private String userEmail;
    private Date startDate;
    private Long id;

    private Date endDate;
    private Long carId;
    private Long userId;

    public CarReservationDto() {
    }

    public CarReservationDto(String carName, String userEmail, Date startDate, Long id, Date endDate, Long carId, Long userId) {
        this.carName = carName;
        this.userEmail = userEmail;
        this.startDate = startDate;
        this.id = id;
        this.endDate = endDate;
        this.carId = carId;
        this.userId = userId;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
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

    public Long getCarId() {
        return carId;
    }

    public void setCarId(Long carId) {
        this.carId = carId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
