import React, { Component } from "react";
import "./AboutUs.css";
class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="About">
        <p className="aboutus">
        <h3>Our Mission</h3>
         Daddy’s Garage aims to make it easy for you to get that special tool for your next project whenever you need it.
         We offer a variety of tools from trustworthy lenders in your community. 
         You can also opt in to make money from the tools and equipment you have sitting in your garage by listing them on Daddy’s Garage. 
         We charge a small flat rate fee of %10 for this service.
        </p>
        
         <p className="aboutauthor">
         <h3>Who we are</h3>
         Daddy’s Garage was founded in 2018 by Jason Laico. He created Daddy’s Garage as a way to make the process simpler for
         those who don't want to spend lots of money to purchase tools that are not often used. He is currently a full stack web developer
         at DevMountain Dallas and loves new technologies and innovative concepts.
        </p>

        
      </div>
    );
  }
}
export default AboutUs;