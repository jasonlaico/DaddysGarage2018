import React from 'react'
import {Link} from 'react-router-dom';

export default function PendingTool(props) {
    console.log(props)

let category;
  if(props.category_id === 1) category = 'Outdoor'
  else if(props.category_id === 2) category = 'Home Improvement'
  else if(props.category_id === 3) category = 'Safety'
  else if(props.category_id === 4) category = 'Woodworking'
  else if(props.category_id === 5) category = 'Hardware'
  else if(props.category_id === 6) category = 'Automotive'
  else if(props.category_id === 7) category = 'Plumbing'
  else if(props.category_id === 8) category = 'Electrical'
  else if(props.category_id === 9) category = 'Recreational'


    return (
        <div className = 'listings3'key={props.id}>
  <img src={props.s3_image} alt='Tool' height='165' width='auto'/>
  <div className = "descrips3">
  <p>Available:{props.available ? "Yes": "No"}</p>
  <p>Brand: {props.brand} </p>
  <p>Model:{props.model} </p>
  <p>Category :{category}</p>
  <p>Description:{props.description} </p>
  {/* <p>Rating:{props.rating}</p> */}
  <p>Hourly Price: ${props.hour_price}</p>
  <p>Daily Price : ${props.day_price}</p>
  <p>Weekly Price : ${props.week_price}</p>
  <p>Deposit : ${props.deposit}</p>
  <p>Date YY:MM:DD : {props.date.substring(0,10)}</p>
  <p>Duration DD:HH:MM : {props.duration}</p>
  </div>

  <Link to={`/ListingPortal/1`}>
         <button onClick={(e) => props.approvetool(props.id)} type='' className=''>Approve</button>
  </Link>
                 <button onClick={(e) => props.delpending(props.id)}>Decline/Remove from list</button>      
        </div>
    )
}