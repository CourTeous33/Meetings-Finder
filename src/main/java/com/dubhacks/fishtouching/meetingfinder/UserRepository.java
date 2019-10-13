package com.dubhacks.fishtouching.meetingfinder;

import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.google.gson.Gson;

@Repository
public class UserRepository {
	
	@Autowired
    private JdbcTemplate jdbcTemplate;
 
    @Transactional(readOnly=true)
    public List<User> findAll() {
        return jdbcTemplate.query("select * from users", new UserRowMapper());
    }
    
    @Transactional(readOnly=true)
    public List<Event> findUserEvent(String Uid) {
    	String query = "select * from events where Uid = ?";
    	return jdbcTemplate.query(query, new EventRowMapper(), Uid);
    }
    
    public void importUserEvent(List<Event> list) {
    	for (Event e: list) {
    		String query = "INSERT INTO Events (Uid, Weekday, StartTime)" + " VALUES (?, ?, ?)";
    		jdbcTemplate.update(query, e.getUid(), e.getWeekDay(), e.getStartTime());
    	}	
    }
    
    public void addNewUser(String user) {
    	Gson gson=new Gson();
    	User u = gson.fromJson(user,User.class);
    	System.out.println(u.getUid());
    	System.out.println(u.getPassword());
    	System.out.println(u.getEmail());
    	String query = "INSERT INTO Users (Uid, Password, Email)" + " VALUES (?, ?, ?)";
    	jdbcTemplate.update(query, u.getUid(), u.getPassword(), u.getEmail());
    }
}