package com.dubhacks.fishtouching.meetingfinder;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping(path="/all")
	public @ResponseBody Iterable<User> getAllUsers() {
		// This returns a JSON or XML with the users
		return userRepository.findAll();
	}
	
	@GetMapping(path="/user-schedule/{Uid}") 
	public @ResponseBody JSONObject getAllEvents() {
		return new JSONObject("{}");
	}
	
	@GetMapping(path="/find-user/{UName}")
	public @ResponseBody Iterable<Event> getUserEvents() {
		
	}
	 
}

