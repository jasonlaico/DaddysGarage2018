// Lender Section:
// Manage Listings -approve pending, delete listing, update listing, add listing, charge fees
// Browse reviews

// Borrower Section:
// Leave review, view pending/ accepted requests, pay fees, view/ remove favorites


import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "./ListingPortal.css";
import RentalTool2 from './RentalTool2'
import PendingTool from './PendingTool'
import ApprovedTool from './ApprovedTool'
import {Elements, StripeProvider} from "react-stripe-elements"
import CheckoutForm from "./CheckoutForm"

export default class ListingPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tools:[],
      ptools:[],
      atools:[],
      payment:false
      
    };
    this.approvetool = this.approvetool.bind(this)
    this.delpending = this.delpending.bind(this);

  }

  //get tools where user id matches logged in user from renter table
  //add update button for listing
  //add delete button for listing

  //get tools from accepted where user id matches logged in from renter table

  //get tools from pending where user id matches logged in from renter table

  //get tools from favorites where user id matches logged in from renter table
  
  //delete tools from favorites above
  
  //post review on 1-5 scale to a user id from approved table

  componentDidMount() {
    this.getAlltool()
    this.getallpending()
    this.getallapproved()

  }
  getAlltool(){
    axios.get(`/api/tools`).then(res => {
      this.setState({
        tools: res.data
      })
    })
}

getallpending(){
  console.log(this.state)
  axios.get(`/api/pending`).then(res => {
    this.setState({
      ptools: res.data
    })
  })
}


getallapproved(){
  console.log(this.state)
  axios.get(`/api/approved`).then(res => {
    this.setState({
      atools: res.data
    })
  })
}


delpending(id){
  console.log (id)

  axios.delete(`/api/pending/${id}`).then(res => {
      this.getallpending();

  })
}


// console.log(this.state.tools)
// let mappedTools = this.state.tools.map((tool) => {
//     return(
//         <div key={tool.listing_id}>
//     <Tool
//     id={tool.listing_id}
 
approvetool(id) { 
  // console.log(this.state.ptools)
  // console.log(id)
   let ptoolnum = this.state.ptools.find(e=> e.tool_id === id)
   console.log(ptoolnum)

  const { rental_id, user_id, tool_id, date, duration  } = ptoolnum
  axios.post(`/api/approved`, { rental_id, user_id, tool_id, date, duration  })
  .then(response => {
      this.getallpending()
      ;
  })
}
// approvetool() { 
//   const { rental_id, user_id, tool_id, date, duration  } = this.state.ptools[0];
// console.log(this.state.ptools[0])
//   axios.post(`/api/approved`, { rental_id, user_id, tool_id, date, duration  })
//   .then(response => {
//       this.getallpending()
//       ;
//   })
// }


  render() {
 
    // var tools =  this.state.tools ;

console.log(this.state.tools)
let mappedTools = this.state.tools.map((tool) => {
return(
    <div key={tool.tool_id}>
    <RentalTool2
id={tool.tool_id}
available={tool.available}
brand= {tool.brand} 
model={tool.model} 
category_id={tool.category_id} 
description={tool.description} 
rating={tool.rating}
s3_image={tool.s3_image}
hour_price = {tool.hour_price}
day_price = {tool.day_price}
week_price = {tool.week_price}
deposit = {tool.deposit}
deltool = {this.deltool}
updatetool= {this.updatetool}
/>


    </div>
)
})

console.log(this.state.ptools)

let mappedpendTools = this.state.ptools.map((tool) => {
  return(
      <div key={tool.tool_id}>
      <PendingTool
  id={tool.tool_id}
  available={tool.available}
  brand= {tool.brand} 
  model={tool.model} 
  category_id={tool.category_id} 
  description={tool.description} 
  rating={tool.rating}
  s3_image={tool.s3_image}
  hour_price = {tool.hour_price}
  day_price = {tool.day_price}
  week_price = {tool.week_price}
  deposit = {tool.deposit}
  date = {tool.date}
  duration= {tool.duration}
  delpending = {this.delpending}
  approvetool= {this.approvetool}

  
  />
  
  
      </div>
  )
  })

  console.log(this.state)

  let mappedapprovedTools = this.state.atools.map((tool) => {
    return(
        <div key={tool.tool_id}>
        <ApprovedTool
    id={tool.tool_id}
    available={tool.available}
    brand= {tool.brand} 
    model={tool.model} 
    category_id={tool.category_id} 
    description={tool.description} 
    rating={tool.rating}
    s3_image={tool.s3_image}
    hour_price = {tool.hour_price}
    day_price = {tool.day_price}
    week_price = {tool.week_price}
    deposit = {tool.deposit}
    date = {tool.date}
    duration= {tool.duration}
    delpending = {this.delpending}
    approvetool= {this.approvetool}
  
    
    />
    
    
        </div>
    )
    })

    return (
     
<div>

    <Link to='/ToolUpdate/add'>
                <button type='' className='addlistingbutton'>Add New Listing</button>
                </Link>
  <h2>Your Tools for Rent</h2>
  <div className= "allmkttools">
{ mappedTools}
 </div>

<h2>Pending Tools</h2>
<div className= "allmkttools">
{ mappedpendTools}
</div>

<h2>Approved Tools for Rent</h2>
<div className= "allmkttools">
{ mappedapprovedTools}
</div>

        <h2>Make a Payment</h2>

     <button onClick={() => this.setState({payment:true})}>Pay Here </button>     
  
{this.state.payment && (

   <div>
 <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
      <div className="example">
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>
    </StripeProvider>
    </div> )}
<br></br>
</div> 

);
}
}
    