package com.fullstack.carrental.repository;

import com.fullstack.carrental.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthenticationRepository extends JpaRepository<User,Long> {
    User findByEmail(String email);
}
