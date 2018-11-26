import React from 'react'
import {Link} from 'react-router-dom';
import "./Marketplace.css"
export default function Tool(props) {
    console.log(props.id)

    return (
        <div className = 'listings'key={props.id}>
            <img src={props.s3_image} alt='Tool' height='165' width='auto'/>
            <div className = "descrips">
            <p>Brand: {props.brand}</p>
            <p>Model: {props.model}</p>
            <p>Category: {props.category}</p>
            <p>Description: {props.description}</p>
            <p>Price: ${props.tool_price}</p>
            <p>Phone: {props.phone}</p>
            </div>
            <div className="mktbuttons">
            <button className = "mktbuttons2" onClick={(e) => props.delmarketlisting(props.id)}>Delete</button>
            <Link to={`/Marketplaceupdate/${props.id}`}>
                 <button type='' className=''>Edit</button>
                 </Link>
                 </div>
        </div>
    )
}