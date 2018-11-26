// List a tool feature
// 	Add, update, delete listing 

// 	Table LENDER/RENTER
// 		First Name, Last Name, Address(city,zip,street address), Rating, Email
// Tool Name, Tool ID, Phone Number, Calendar Availability,picture, sessionID, login ID, user ID, 
	
// 	Table TOOLS
// 		Tool ID, S3 image link, Tool Price(day,hour, week, deposit), Tool description, Tool Brand, Tool Model,  Tool Category, userID

// Lists all tools in area specified by user
// Drop down categories on sidebar 
// Shows listings on map
// 	Pin on each 
// 	Calendar for each
// 	(rating for lender)
import React,{ Component } from 'react'
import Map from '../Map/Map'
import axios from "axios";
import RentalTool from './RentalTool'
 import "./ToolsForRent.css";
class ToolsForRent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tools:[]
      };
      // this.getAlltool = this.getAlltool.bind(this)
    }

    componentDidMount() {
      this.getAlltool()
    }
    getAlltool(){
      axios.get(`/api/tools`).then(res => {
        this.setState({
          tools: res.data
        })
      })
  }
    render() {
   
      // var tools =  this.state.tools ;
console.log(this.state.tools)
let mappedTools = this.state.tools.map((tool) => {
  return(
      <div className="Toolforrent" key={tool.tool_id}>
      <RentalTool
  tool_id={tool.tool_id}
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
/>
 
 
      </div>
  )
})

      return (

<div>

<div>
  <div className ="mapcontainer">
 <Map
   zoom={10}
   markers={this.state.tools}
   googleMapURL={`${process.env.REACT_APP_GOOGLE_LINK}`}
   containerElement={<div style={{ height: `400px` }} />}
   loadingElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
   />
   </div>  
<h3> Take a look at all our rentals</h3>
 <div className="toolcontainer">{ mappedTools}</div>
 
</div>

{/* <Map center= {{lat:40.728199, lng:-79.9894738}}
zoom = {14}
containerElement={<div style= {{height:100+ '%'}}/>}
mapElement={<div style={{height:100+'%'}} />} /> */}



</div> 

);
}
}
export default ToolsForRent;
