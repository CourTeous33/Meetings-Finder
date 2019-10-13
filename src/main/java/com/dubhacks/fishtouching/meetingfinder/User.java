package com.dubhacks.fishtouching.meetingfinder;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {
    @Id
    private String Uid;
    private String Email;
    private String Password;
    
	public User() {
		super();
	}
	
	public User(String uid, String email, String password) {
		super();
		Uid = uid;
		Email = email;
		Password = password;
	}

	public String getUid() {
		return Uid;
	}
	public void setUid(String uid) {
		Uid = uid;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
}
