//allows add delete update of info 
//ex  name , address, email , phone

import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./Account.css";
 
export default class Account extends Component {
    constructor() {
        super();

        this.state = {
            user_id: "",
            session_id: "",
            login_id: "",
            first_name: "",
            last_name: "",
            city: "",
            zip:""   ,      
            address:"",
            email:"",
            phone:"",
            rating: ""        
        }

   
    }

    componentDidMount() {
        axios.get(`/api/renter/`).then(response => {
            const renter = response.data.find(e => e.listing_id === +this.props.match.params.id)
            console.log(this.props.match.params.id)
             console.log(response.data)
            console.log(this.props)
            // find listing_id that matches this.props.match.params.id
            this.props.location.pathname !== `/Account/addnewuser` && 
            this.setState({           
                user_id: response.data[0].user_id,
                // session_id: renter.session_id,
                // login_id: renter.login_id,
                // first_name: renter.first_name,
                // last_name: renter.last_name,
                // city: renter.city,
                // zip:renter.zip,
                // address:renter.address,
                email:response.data[0].email,
                // phone: renter.phone,
                // rating:renter.rating
             })

 
        });
    }
   
 


    componentDidUpdate() {
        if(this.props.location.pathname === "/") {
            this.reset();
        }
    }

    updateState(renter, e) {
        this.setState({
            [renter]: e.target.value
        })
    }

    reset() {
        this.setState({
            user_id: "",
            session_id: "",
            login_id: "",
            first_name: "",
            last_name: "",
            city: "",
            zip:""   ,      
            address:"",
            email:"",
            phone:"",
            rating: ""        })
    }
    createrenter() {
        const { user_id, session_id, login_id, first_name, last_name, city, zip, address, email, phone, rating} = this.state;
        axios.post(`/api/renter`, { user_id, session_id, login_id, first_name, last_name, city, zip, address, email, phone, rating})
        .then(response => {
            this.reset();
        })
    }

    updaterenter() {
        console.log(this.props.match.params.id)
        const {user_id, session_id, login_id, first_name, last_name, city, zip, address, email, phone, rating} = this.state;
        axios.put(`/api/renter-edit/${this.state.user_id}`, { user_id, session_id, login_id, first_name, last_name, city, zip, address, email, phone, rating}).then(response => {

        })
    }


    render() {

        console.log(this.props)
        console.log(this.state)
        return (
          
            <div className="form">

            <div className="formContainer">
                <div className="formImageContainer">
                    {/* <img className="formImage" src={this.state.image || "https://www.quickanddirtytips.com/sites/default/files/styles/insert_medium/public/images/11066/clean-gardening-tools.png"} alt="Product"/> */}
                </div>

                <Link to={`/ListingPortal/${this.state.user_id}`}>
              <button type='' className=''>Manage and view your rentals here </button>
               </Link>

                             <h3>
Update your profile info below
            </h3>
                <div className="formInput">
                    
                    <h2>First Name</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/Account/addnewuser" ? this.state.first_name : ""} onChange={(e) => this.updateState("first_name", e)}/>
                    <h2>Last Name</h2> 
                    <input type="text" defaultValue={this.props.location.pathname !== "/Account/addnewuser" ? this.state.last_name : ""} onChange={(e) => this.updateState("last_name", e)}/><br/>
                    <h2> City</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/Account/addnewuser" ? this.state.city : ""} onChange={(e) => this.updateState("city", e)}/><br/>
                    <h2> Zip</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/Account/addnewuser" ? this.state.zip : ""} onChange={(e) => this.updateState("zip", e)}/><br/>
                    <h2>Address</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/Account/addnewuser" ? this.state.address : ""} onChange={(e) => this.updateState("address", e)}/><br/>
                    <h2>Email</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/Account/addnewuser" ? this.state.email : ""} onChange={(e) => this.updateState("email", e)}/><br/>
                    <h2>Phone</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/Account/addnewuser" ? this.state.phone : ""} onChange={(e) => this.updateState("phone", e)}/><br/>
                    

                    <div className="formButtons">
                    <Link to="/" className="cancel" onClick={() => this.reset()}>Cancel  </Link>
                    { this.props.location.pathname === "/account/addnewuser" ?  <Link to={`/ListingPortal/${this.state.user_id}`} className="create" onClick={() => this.createrenter()}>Add new user</Link> : <Link to={`/ListingPortal/${this.state.user_id}`} className="create" onClick={() => this.updaterenter()}>Save  Changes</Link> }
                    </div>
                </div>

                
            </div>
            </div>
        )
    }
}