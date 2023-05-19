package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	public User findById(int id);

}
