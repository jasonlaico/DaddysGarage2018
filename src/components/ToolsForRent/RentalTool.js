import React from 'react'
import {Link} from 'react-router-dom';
import "./ToolsForRent.css"
export default function RentalTool(props) {
    console.log(props.id)

    return (
        <div className = 'listings2'key={props.id}>
  <img src={props.s3_image} alt='Tool' height='165' width='auto'/>
  <div className="descrips2">
  <p>Available:{props.available ? "Yes": "No"}</p>
  <p>Brand: {props.brand} </p>
  <p>Model:{props.model} </p>
  {/* <p>Category :{props.category_id} </p> */}
  <p>Description:{props.description} </p>
  {/* <p>Rating:{props.rating}</p> */}
  <p>Borrow me for as low as: ${props.hour_price}</p>
  {/* <p>Daily Price : ${props.day_price}</p>
  <p>Weekly Price : ${props.week_price}</p>
  <p>Deposit : ${props.deposit}</p> */}
  </div>
   <Link to={`/ToolDetail/${props.tool_id}`}>
                 <button className="rentbutton" type='' className=''>More info/book</button>
                 </Link>
            
        </div>
    )
}