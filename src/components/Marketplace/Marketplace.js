// Have any tools you want to sell? List them here and make some money!
// Table MARKETPLACE
// S3 image link, Tool Price, Tool description, Tool Brand, Tool Model,  Tool Category, userphone, LenderID


import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Tool from './Tool'
import "./Marketplace.css";
export default class Dashboard extends Component {
    constructor(){
        super();
        this.state={
            tools: [] 
            // id: 'Marketplace'
        }
        this.delmarketlisting = this.delmarketlisting.bind(this);
    }
    componentDidMount(){
        this.getallmarketlisting()
    }
    getallmarketlisting(){
        axios.get('/api/marketlisting').then(res => {
            console.log(res.data)
            this.setState({
                tools: res.data
            })
        })
    }
    delmarketlisting(id){
        console.log (id)
        axios.delete(`/api/marketlisting/${id}`).then(res => {
            this.getallmarketlisting();
        })
    }

    updatemarketlisting(id) {
        console.log(this.props.match.params.id)
        const {s3_image, tool_price, description, brand, model, category, phone} = this.state;
        axios.put(`/api/marketlisting/${id}`, { s3_image, tool_price, description, brand, model, category, phone}).then(response => {

        })
    }
    render() {
        
        console.log(this.state.tools)
        let mappedTools = this.state.tools.map((tool) => {
            return(
                <div key={tool.listing_id}>
            <Tool
            id={tool.listing_id}
            brand= {tool.brand} 
            model={tool.model} 
            category={tool.category} 
            description={tool.description} 
            tool_price={tool.tool_price}
            phone={tool.phone}
            s3_image={tool.s3_image}
            delmarketlisting = {this.delmarketlisting}
            updatemarketlisting = {this.updatemarketlisting}

            />
                </div>
            )
        })
        return (
            <div>
                <h2>Have any tools you want to sell? <br></br>List them here and make some money!</h2><br></br>
                <Link to='/Marketplaceupdate/add'>
                <button className= "addlistingbutton" type=''  >Add New Listing</button>
                </Link>
               
               <div className= "allmkttools">
                {mappedTools}
                </div>
             
            </div>

         
            
        )
    }
}










// import React, {Component} from "react";
// import axios from "axios";
// import {Link} from "react-router-dom";

// export default class Form extends Component {
//     constructor() {
//         super();

//         this.state = {
//             s3_image: "",
//             tool_price: 0,
//             description:"",
//             brand: "",
//             model: "",
//             category: "",
//             phone: "",
//         }

   
//     }

//     componentDidMount() {
//         axios.get(`/api/marketplace/${this.props.match.params.id}`).then(response => {
//             var product = response.data[0];
//             this.setState({           
//                s3_image: product.s3_image,
//                 tool_price: product.tool_price,
//                 description: product.description,
//                 brand: product.brand,
//                 model: product.model,
//                 category: product.category,
//                 phone: product.phone
//              })
//         });
//     }
   

  

//     componentDidUpdate() {
//         if(this.props.location.pathname === "/") {
//             this.reset();
//         }
//     }

//     updateState(property, e) {
//         this.setState({
//             [property]: e.target.value
//         })
//     }

//     reset() {
//         this.setState({
//             s3_image: "",
//             tool_price: 0,
//             description:"",
//             brand: "",
//             model: "",
//             category: "",
//             phone: ""
//         })
//     }
//     addProduct() {
//         const { S3_image, tool_price, description, brand, model, category, phone} = this.state;
//         axios.post(`/api/marketplace`, { S3_image, tool_price, description, brand, model, category, phone})
//         .then(response => {
//             this.reset();
//         })
//     }

//     editProduct() {
//         const {S3_image, tool_price, description, brand, model, category, phone} = this.state;
//         axios.put(`/api/marketplace/${this.props.match.params.id}`, { S3_image, tool_price, description, brand, model, category, phone}).then(response => {

//         })
//     }

//     render() {
        
//         return (
          
//             <div className="form">
//               <p>
//             Have any tools you want to sell? List them here and make some money!
//             </p>
//             <div className="formContainer">
//                 <div className="formImageContainer">
//                     <img className="formImage" src={this.state.image || "https://www.quickanddirtytips.com/sites/default/files/styles/insert_medium/public/images/11066/clean-gardening-tools.png"} alt="Product"/>
//                 </div>
//                 <div className="formInput">
//                     <h1>Image</h1>
//                     <input type="text" value={this.state.S3_image} onChange={(e) => this.updateState("S3_image", e)}/>
//                     <h1>Price</h1>
//                     <input type="text" value={this.state.tool_price} onChange={(e) => this.updateState("tool_price", e)}/>
//                     <h1>Description</h1>
//                     <input type="text" value={this.state.description} onChange={(e) => this.updateState("description", e)}/><br/>
//                     <h1> Brand</h1>
//                     <input type="text" value={this.state.brand} onChange={(e) => this.updateState("brand", e)}/><br/>
//                     <h1> Model</h1>
//                     <input type="text" value={this.state.model} onChange={(e) => this.updateState("model", e)}/><br/>
//                     <h1>Category</h1>
//                     <input type="text" value={this.state.category} onChange={(e) => this.updateState("category", e)}/><br/>
//                     <h1>Phone</h1>
//                     <input type="text" value={this.state.phone} onChange={(e) => this.updateState("phone", e)}/><br/>
                     
//                     <div className="formButtons">
//                     <Link to="/" className="red" onClick={() => this.reset()}>Cancel</Link>
//                     { this.props.location.pathname === "/add" ?  <Link to="/" className="green" onClick={() => this.addProduct()}>Add to Listings</Link> : <Link to="/Marketplace" className="green" onClick={() => this.editProduct()}>Save  Changes</Link> }
//                     </div>
//                 </div>

                
//             </div>
//             </div>
//         )
//     }
// }

