package com.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.dao.UserRepository;
import com.entities.User;

@Component
public class UserService {

	@Autowired
	private UserRepository userRepository;
		
	public List<User> getAllData()
	{
		List<User> list = (List<User>)this.userRepository.findAll();
		return list;		
	}
	
	public User getDataById(int id)
	{
		User user= null;
		user= this.userRepository.findById(id);
		return user;
	}
	
	public User addData(User u)
	{
	
		return userRepository.save(u);
	}
		
	public void deleteData(int did)
	{
		userRepository.deleteById(did);
		
	}
	
	public void updateData(User user, int data_id)
	{
		user.setData_id(data_id);
		userRepository.save(user);
	}

}
