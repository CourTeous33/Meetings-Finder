package com.dubhacks.fishtouching.meetingfinder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "times")
public class Schedule {
	
	String Uid;
	String EventStartTime;
	
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
