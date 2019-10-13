package com.dubhacks.fishtouching.meetingfinder;


import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "times")
public class Schedule {
	@EmbeddedId
	String Uid;
	String EventStartTime;

	public Schedule() {
		super();
	}
	public Schedule(String uid, String eventStartTime) {
		super();
		Uid = uid;
		EventStartTime = eventStartTime;
	}
	public String getUid() {
		return Uid;
	}
	public void setUid(String uid) {
		Uid = uid;
	}
	public String getEventStartTime() {
		return EventStartTime;
	}
	public void setEventStartTime(String eventStartTime) {
		EventStartTime = eventStartTime;
	}
}
