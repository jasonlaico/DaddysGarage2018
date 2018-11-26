// Shows location, tool name, pictures,  brand, model, category, prices, description, availability
// Table REVIEWS
// 	Rental id, ReviewID, rating, lenderID, writerID, date
//TABLE TOOLS 
//FORM WITH DATE REQUEST AND DURATION 

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "./ToolDetail.css";
export default class ToolDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
          tools:[]
         }}

    // HERE
    // in componentdidmount... set (user_id, tool_id) in reducer. 
    // that will change everytime you go to tool details
    componentDidMount() {
     this.getAlltool()

    }

    getAlltool(){
      axios.get(`/api/tools`).then(res => {
        this.setState({
          tools: res.data
        })
        console.log(this.state)
        let find = this.state.tools.find(e=> e.tool_id === +this.props.match.params.tool_id)
        console.log(find)



      })
  }

  
    render() {

      let mappedTool = this.state.tools.filter((tool) => {

        return tool.tool_id === +this.props.match.params.tool_id
          
        // console.log (this.props.match.params)
        // const find = this.state.tools && this.state.tools.find(e=> e.tool_id === +this.props.match.params.tool_id)
        // console.log(find)
        // return (
          // <div id="ToolDetail"key={find.tool_id}>
          // <img src={find.s3_image} alt='Tool' height='450' width='700'/>
          // <p>Available:{find.available ? "Yes": "No"}</p>
          // <p>Brand: {find.brand} </p>
          // <p>Model:{find.model} </p>
          // <p>Category :{find.category_id} </p>
          // <p>Description:{find.description} </p>
          // <p>Rating:{find.rating}</p>
          // <p>Hourly Price : ${find.hour_price}</p>
          // <p>Daily Price : ${find.day_price}</p>
          // <p>Weekly Price : ${find.week_price}</p>
          // <p>Deposit : ${find.deposit}</p>
          
          // </div>
        // );
      }
      ) 


        return(
              
        <div>
        {mappedTool.map((item)=>{
                let category;
                if(item.category_id === 1) category = 'Outdoor'
                else if(item.category_id === 2) category = 'Home Improvement'
                else if(item.category_id === 3) category = 'Safety'
                else if(item.category_id === 4) category = 'Woodworking'
                else if(item.category_id === 5) category = 'Hardware'
                else if(item.category_id === 6) category = 'Automotive'
                else if(item.category_id === 7) category = 'Plumbing'
                else if(item.category_id === 8) category = 'Electrical'
                else if(item.category_id === 9) category = 'Recreational'
              
          return ( 
            <div id="ToolDetail"key={item.tool_id}>
            <img src={item.s3_image} alt='Tool' height='450' width='700'/>
            <p>Available:{item.available ? "Yes": "No"}</p>
            <p>Brand: {item.brand} </p>
            <p>Model:{item.model} </p>
            <p>Category :{category} </p>
            <p>Description:{item.description} </p>
            <p>Hourly Price : ${item.hour_price}</p>
            <p>Daily Price : ${item.day_price}</p>
            <p>Weekly Price : ${item.week_price}</p>
            <p>Deposit : ${item.deposit}</p>
            <p>Lender rating:{item.rating}/5</p>
            <p>Lender:{item.first_name}</p>
            {/* <button>Request to book now</button>   */}

              <Link to={`/ToolDetail/RentTime/${item.tool_id}`}>
              <button type='' className=''>Like what you see? Schedule a time for rental </button>
               </Link>
            
            </div>
            
            
          )
          
         }) }</div>

        
      )}
  }
