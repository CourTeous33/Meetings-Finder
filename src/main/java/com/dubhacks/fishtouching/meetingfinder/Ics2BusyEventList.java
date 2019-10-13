package com.dubhacks.fishtouching.meetingfinder;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import net.fortuna.ical4j.data.CalendarBuilder;
import net.fortuna.ical4j.model.Calendar;
import net.fortuna.ical4j.model.Component;
import net.fortuna.ical4j.model.component.VEvent;

public class Ics2BusyEventList {
	private final String input;
	private long startTime;
	private long endTime;
	
	public Ics2BusyEventList(String input, long startTime, long endTime) {
		super();
		this.input = input;
		this.startTime = startTime;
		this.endTime = endTime;
	}

	public Calendar read() throws Exception {
		InputStream fin = new ByteArrayInputStream(input.getBytes(StandardCharsets.UTF_8));;
		CalendarBuilder builder = new CalendarBuilder();
		Calendar calendar = builder.build(fin);	
		return calendar;
	}
	
	public List<Event> process(Calendar item) {
		String str = item.getProperty("X-WR-CALNAME").toString();
		String[] arr = str.substring(13).split("@");
		String userName = arr[0];
		
		List<VEvent> eventList = item.getComponents(Component.VEVENT);
		
		// The List of free time but not divided into slot yet
		List<Event> busyList = new ArrayList<Event>();
		
		for (VEvent e: eventList) {
			long eStart = e.getStartDate().getDate().getTime();
			if (eStart < startTime) {
				continue;
			}
			long eEnd = e.getEndDate().getDate().getTime();
			if (eEnd > endTime) {
				break;
			}
			while (eStart < eEnd) {
				int[] dayMinute = convertTimeFormat(eStart);
				Event event = new Event(userName, dayMinute[0], dayMinute[1]);
				busyList.add(event);
				eStart += TimeUnit.MINUTES.toMillis(15);
			}
		}
		return busyList;
		
	}
	
	public int[] convertTimeFormat(long time) {
		int[] res = new int[2];
		long dateMs = time % startTime;
		long mPerDay = TimeUnit.DAYS.toMillis(1); 
		int dayOfWeek = (int) (dateMs / mPerDay);
		long milliLeft = dateMs % mPerDay;
		long minutes = TimeUnit.MILLISECONDS.toMinutes(milliLeft);
		int startId = (int) (minutes / 15);
		
		res[0] = dayOfWeek;
		res[1] = startId;
		
		return res;
	}
	
}
