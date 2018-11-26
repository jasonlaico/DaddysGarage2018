// Button NEW USER 
// Opens up Auth and form for login info
// Table AUTHUSERS
// AuthKey, userID, email
// Button LOGIN
// Enables add listing feature
// How it works section:
// Find a tool or machine you are looking for
// Contact lender to confirm availability
// Pay and pick up your tool to get your project started!



import React, { Component } from 'react';
import "./Dashboard.css";
// import {Link} from 'react-router-dom';
import axios from 'axios';
// import Map from '../Map/Map';
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renter:[]
        };
      }

      componentDidMount() {
        this.getallrenter()
   
       }
     
      getallrenter(){
        axios.get(`/api/renter`).then(res => {
          this.setState({
            renter: res.data
          })
          console.log(this.state)
          let find = this.state.renter.find(e=> e.user_id === +this.props.match.params.user_id)
          console.log(this.props)
  
  
  
        })
    }


    render() {
        let mappedTool = this.state.renter.filter((tool) => {

            return tool.tool_id === +this.props.match.params.tool_id
        })
        return (
       
            <div>
 
 <div className="header">
 </div>
<div className="dashtext">
             <h3 id="hiw"> How it works :</h3>
              
              <br></br>
Find a tool or machine you are looking for<br></br>
 Contact lender to confirm availability<br></br>
 Pay and pick up your tool to get your project started!
 </div>
 {/* <Map/>
                */}
<br></br>
                
           <button className="loginlink"  onClick={(e)=>window.open (`${process.env.REACT_APP_SERVER}/login`, "_self")} > Login
           </button>

            <br></br>
            {/* <Link to={`/ListingPortal/${this.state.user_id}`}  >Go to Listings Manager</Link>           */}
            </div>
           
           
        )
    }
}