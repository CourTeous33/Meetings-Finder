package com.dubhacks.fishtouching.meetingfinder;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.stereotype.Controller;

import javax.sql.DataSource;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserController {
	
//	@Autowired
//	private UserRepository userRepository;
//	
//	@PostMapping(path="/add") // Map ONLY POST Requests
//	public @ResponseBody String addNewUser (@RequestParam String name
//	, @RequestParam String email) {
//		// @ResponseBody means the returned String is the response, not a view name
//		// @RequestParam means it is a parameter from the GET or POST request
//
//		User n = new User ("123", "ggg", "1234", "gg@gmail.com");
//		userRepository.save(n);
//		return "Saved";
//	}
//
//	@GetMapping(path="/all")
//	public @ResponseBody Iterable<User> getAllUsers() {
//		// This returns a JSON or XML with the users
//		return userRepository.findAll();
//	}
	
//	@Autowired
//    private TimeArrangeRepository timeArrangeRepository;
//	
//	private final Logger log = LoggerFactory.getLogger(UserController.class);
//
//    public UserController(TimeArrangeRepository timeArrangeRepository) {
//        this.timeArrangeRepository = timeArrangeRepository;
//    }
//
//    @GetMapping("/users")
//    Collection<User> groups() {
//        return timeArrangeRepository.findAll();
//    }

//    @GetMapping("/user/{id}")
//    ResponseEntity<?> getUser(@PathVariable String Uid) {
//        Optional<User> user = timeArrangeRepository.findByUid(Uid);
//        return user.map(response -> ResponseEntity.ok().body(response))
//                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
//    }
//
//    @PostMapping("/user")
//    ResponseEntity<User> createGroup(@Valid @RequestBody User user) throws URISyntaxException {
//        log.info("Request to create group: {}", user);
//        User result = timeArrangeRepository.save(user);
//        return ResponseEntity.created(new URI("/api/group/" + result.getUid()))
//                .body(result);
//    }
//
//    @PutMapping("/group/{id}")
//    ResponseEntity<User> updateGroup(@Valid @RequestBody User user) {
//        log.info("Request to update group: {}", user);
//        User result = timeArrangeRepository.save(user);
//        return ResponseEntity.ok().body(result);
//    }
    
	 @RequestMapping("/users")
	 public User user() {
		 return new User("123", "ggg", "1234", "gg@gmail.com");
	 }
	 
}

