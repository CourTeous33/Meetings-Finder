package com.dubhacks.fishtouching.meetingfinder;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "Event")
public class Event {
	
	@EmbeddedId
	private String Uid;
	private int weekDay;
	private int startTime;
		
	public Event() {
		super();
	}

	public Event(String uid, int weekDay, int startTime) {
		super();
		Uid = uid;
		this.weekDay = weekDay;
		this.startTime = startTime;
	}

	public String getUid() {
		return Uid;
	}

	public void setUid(String uid) {
		Uid = uid;
	}

	public int getWeekDay() {
		return weekDay;
	}

	public void setWeekDay(int weekDay) {
		this.weekDay = weekDay;
	}

	public int getStartTime() {
		return startTime;
	}

	public void setStartTime(int startTime) {
		this.startTime = startTime;
	}
	
}
