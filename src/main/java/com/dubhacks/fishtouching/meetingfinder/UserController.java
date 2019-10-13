package com.dubhacks.fishtouching.meetingfinder;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping(path="/all")
	public @ResponseBody Iterable<User> getAllUsers() {
		return userRepository.findAll();
	}
	
	@GetMapping(path="/user-schedule/{Uid}")
	public @ResponseBody ResponseEntity<?> getUserEvents(@PathVariable String Uid) {
		List<Event> res = userRepository.findUserEvent(Uid);
		if (res == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<List<Event>>(res, HttpStatus.OK);
		}
	}
	
	@GetMapping(path="/upload-import-ics")
	public @ResponseBody ResponseEntity<?> importUserEvents(@RequestBody String input) throws Exception {
		CurrentWeekGetter cwg = new CurrentWeekGetter();
		long startTime = cwg.getStartTimeOfWeek();
		long endTime = cwg.getEndTimeOfWeek();
		
		Ics2BusyEventList fileReader = new Ics2BusyEventList(input, startTime, endTime);
		List<Event> list = fileReader.process(fileReader.read());
		
		try {
			userRepository.importUserEvent(list);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping(path = "/create-user")
	public @ResponseBody ResponseEntity<?> addNewUser(@RequestBody JSONObject user) throws Exception {
		if (user != null) {
			try {
				userRepository.addNewUser(user);
				return new ResponseEntity<>(HttpStatus.OK);
			} catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
			}
		}
		return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
	}
	
}

