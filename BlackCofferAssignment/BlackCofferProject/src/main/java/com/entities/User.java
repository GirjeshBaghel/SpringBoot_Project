package com.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name="newdata")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int data_id;

	private int  intensity;
	private int likelihood;
	private int relevance;
	private int year;
	private String country;
	private String topic;
	private String region;
	private String city;
	private int end_year;
	private double citylng;
	private double citylat;
	private String sector;
	private String insight;
	private String swot;
	private String url;
	private int star_year;
	private int impact;
	private String added;
	private String published;
	private String pestle;
	private String source;
			
}
