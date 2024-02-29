package com.fullstack.carrental.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "car_reservation_status_history")
public class CarReservationStatusHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "reservation_id", nullable = false)
    private CarReservation reservation;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "change_date", nullable = false)
    private Date changeDate;

    public CarReservationStatusHistory() {
        // Default constructor
    }

    public CarReservationStatusHistory(CarReservation reservation, String status, Date changeDate) {
        this.reservation = reservation;
        this.status = status;
        this.changeDate = changeDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CarReservation getReservation() {
        return reservation;
    }

    public void setReservation(CarReservation reservation) {
        this.reservation = reservation;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getChangeDate() {
        return changeDate;
    }

    public void setChangeDate(Date changeDate) {
        this.changeDate = changeDate;
    }
}
