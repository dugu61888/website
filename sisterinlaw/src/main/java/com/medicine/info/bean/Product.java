package com.medicine.info.bean;

import java.sql.Timestamp;

public class Product {
	
	private int id;
	private String name;
	private String intronduce;
	private String location;
	private Timestamp updatetime;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getIntroduce() {
		return intronduce;
	}
	public void setIntroduce(String intronduce) {
		this.intronduce = intronduce;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Timestamp getUpdatetime() {
		return updatetime;
	}
	public void setUpdatetime(Timestamp updatetime) {
		this.updatetime = updatetime;
	}

}
