package com.dubhacks.fishtouching.meetingfinder;

import javax.sql.DataSource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@SpringBootApplication
public class MeetingFinderApplication {
	
	@Bean
	public DataSource dataSource() {
		DriverManagerDataSource ds = new DriverManagerDataSource();
		ds.setDriverClassName(com.mysql.cj.jdbc.Driver.class.getName());
		ds.setUrl("jdbc:mysql://localhost:3306/schedule?useSSL=false");
		ds.setUsername("root");
		ds.setPassword("nst1998112");
		return ds;
	}
    
	public static void main(String[] args) {
		SpringApplication.run(MeetingFinderApplication.class, args);
	}

}
