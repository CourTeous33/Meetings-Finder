package com.dubhacks.fishtouching.meetingfinder;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.jdbc.core.RowMapper;

public class EventRowMapper implements RowMapper<Event>  {

	@Override
	public Event mapRow(ResultSet rs, int rowNum) throws SQLException {
		Event event = new Event();
		event.setUid(rs.getString("Uid"));
		event.setWeekDay(rs.getInt("WeekDay"));
		event.setStartTime(rs.getLong("StartTime"));
		event.setEndTime(rs.getLong("EndTime"));
        return event;
	}
}
