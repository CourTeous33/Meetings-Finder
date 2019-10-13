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
	private long startTime;
	private long endTime;
		
	public Event() {
		super();
	}

	public Event(String uid, int weekDay, long startTime, long endTime) {
		super();
		Uid = uid;
		this.weekDay = weekDay;
		this.startTime = startTime;
		this.endTime = endTime;
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

	public long getStartTime() {
		return startTime;
	}

	public void setStartTime(long startTime) {
		this.startTime = startTime;
	}

	public long getEndTime() {
		return endTime;
	}

	public void setEndTime(long endTime) {
		this.endTime = endTime;
	}
	
}
