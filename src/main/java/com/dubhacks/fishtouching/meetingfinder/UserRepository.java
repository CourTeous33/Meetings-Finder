package com.dubhacks.fishtouching.meetingfinder;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

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
}