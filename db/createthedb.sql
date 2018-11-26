
CREATE TABLE Renter (
	user_id serial PRIMARY KEY NOT NULL,
	session_id VARCHAR(255) NOT NULL,
	login_id VARCHAR(255) NOT NULL,
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	city VARCHAR(255) NOT NULL,
	zip integer NOT NULL,
	address VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	phone integer NOT NULL,
	rating integer NOT NULL)
	


CREATE TABLE Tools (
	tool_id serial PRIMARY KEY NOT NULL,
	user_id integer NOT NULL,
	brand VARCHAR(255) NOT NULL,
	model VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	category_id integer NOT NULL,
	S3_image  VARCHAR(255) NOT NULL,
	day_price integer NOT NULL,
	hour_price integer NOT NULL,
	week_price integer NOT NULL,
	deposit integer NOT NULL,
	available BOOLEAN NOT NULL,
	rating integer NOT NULL,
	first_name VARCHAR(255) NOT NULL);



CREATE TABLE Authusers (
	authkey VARCHAR(255) NOT NULL,
	user_id integer NOT NULL,
	email VARCHAR(255) NOT NULL

);



CREATE TABLE Reviews  (
	rental_id serial PRIMARY KEY NOT NULL,
	rating integer NOT NULL,
	user_id integer NOT NULL,
	date DATE NOT NULL);



CREATE TABLE Favorites (
	tool_id integer NOT NULL,
	user_id integer NOT NULL,
	listing_id integer NOT NULL);



CREATE TABLE Pending (
	rental_id serial PRIMARY KEY NOT NULL,
	user_id integer NOT NULL,
	tool_id integer NOT NULL,
	duration TIME NOT NULL,
	date DATE NOT NULL);



CREATE TABLE Approved (
	rental_id integer NOT NULL,
	user_id integer NOT NULL,
	tool_id integer NOT NULL);



CREATE TABLE Marketplace (
	listing_id serial PRIMARY KEY NOT NULL,
	user_id integer NOT NULL,
	S3_image VARCHAR(255) NOT NULL,
	tool_price integer NOT NULL,
	description VARCHAR(255) NOT NULL,
	brand VARCHAR(255) NOT NULL,
	model VARCHAR(255) NOT NULL,
	category VARCHAR(255) NOT NULL,
	phone integer NOT NULL);



CREATE TABLE Category (
	category_id serial PRIMARY KEY NOT NULL,
	outdoor VARCHAR(255) NOT NULL,
	home_improvement VARCHAR(255) NOT NULL,
	safety VARCHAR(255) NOT NULL,
	woodworking VARCHAR(255) NOT NULL,
	hardware VARCHAR(255) NOT NULL,
	automotive VARCHAR(255) NOT NULL,
	plumbing VARCHAR(255) NOT NULL,
	electrical VARCHAR(255) NOT NULL,
	recreational VARCHAR(255) NOT NULL);



