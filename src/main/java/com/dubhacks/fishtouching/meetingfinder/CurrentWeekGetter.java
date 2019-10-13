package com.dubhacks.fishtouching.meetingfinder;

import java.time.temporal.TemporalAdjusters;
import java.time.temporal.WeekFields;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Locale;

public class CurrentWeekGetter {
	private final static ZoneId TZ = ZoneId.of("America/Los_Angeles");
	
	public long getStartTimeOfWeek() {
		DayOfWeek firstDayOfWeek = WeekFields.of(Locale.US).getFirstDayOfWeek();
		LocalDate localDate = LocalDate.now(TZ).with(TemporalAdjusters.previousOrSame(firstDayOfWeek));
		ZonedDateTime zdt = localDate.atStartOfDay(TZ);
		long millis = zdt.toInstant().toEpochMilli();
		return millis;
	}
	
	public long getEndTimeOfWeek() {
		DayOfWeek firstDayOfWeek = WeekFields.of(Locale.US).getFirstDayOfWeek();
		DayOfWeek lastDayOfWeek = DayOfWeek.of(((firstDayOfWeek.getValue() + 5)
				% DayOfWeek.values().length) + 1);
		LocalDate localDate = LocalDate.now(TZ).with(TemporalAdjusters.nextOrSame(lastDayOfWeek)).plusDays(1);
		ZonedDateTime zdt = localDate.atStartOfDay(TZ);
		long millis = zdt.toInstant().toEpochMilli();
		return millis;
	}
}
