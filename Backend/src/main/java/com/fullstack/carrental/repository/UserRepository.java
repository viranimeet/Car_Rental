package com.fullstack.carrental.repository;

import com.fullstack.carrental.entity.User; // Import User entity
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
