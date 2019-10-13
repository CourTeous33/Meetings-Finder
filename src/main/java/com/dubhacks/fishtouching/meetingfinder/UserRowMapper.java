package com.dubhacks.fishtouching.meetingfinder;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class UserRowMapper implements RowMapper<User> {

	@Override
	public User mapRow(ResultSet rs, int rowNum) throws SQLException {
		User user = new User();
        user.setUid(rs.getString("Uid"));
        user.setUname(rs.getString("UName"));
        user.setPassword(rs.getString("Password"));
        user.setEmail(rs.getString("Email"));
        return user;

	}
}
