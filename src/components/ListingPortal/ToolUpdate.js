import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./ToolUpdate.css";
import Geocode from "react-geocode";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";


export default class ToolUpdate extends Component {
    constructor() {
        super();

        this.state = {
            brand: "",
            model: "",
            description:"",
            category_id:"",
            s3_image: "",
            day_price: "",
            hour_price: "",
            week_price: "",
            deposit: "",
            rating: "",
            available: "",
            first_name: "",
            address:"",
            lat:"",
            lng:"",
            categories: [
                "Outdoor", "Home Improvement","Safety", "Woodworking", "Hardware", "Automotive", "Plumbing", " Electrical", "Recreational"]
        }

   
    }

    componentDidMount() {
        Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
        Geocode.enableDebug();

        axios.get(`/api/tools/`).then(response => {
            const number = response.data.find(e => e.tool_id === +this.props.match.params.tool_id )
            console.log(this.props.match.params.id  )
            console.log(response)
            console.log(response.data)
            console.log(this.props)
            console.log(number)
            // find listing_id that matches this.props.match.params.id
            this.props.location.pathname !== `/ToolUpdate/add` && 
            this.setState({           
                brand: number.brand,
                model: number.model,
                description: number.description,
                category_id: number.category_id,
                s3_image: number.s3_image,
                day_price: number.day_price,
                hour_price: number.hour_price,
                week_price:number.week_price,
                deposit: number.deposit,
                rating: 5,
                available: true,
                first_name: number.first_name,
                address: number.address
              })

      
        });
    }
   

  

    componentDidUpdate() {
        if(this.props.location.pathname === "/") {
            this.reset();
        }
    }

    updateState(tool, e) {
        this.setState({
            [tool]: e.target.value
        })
    }

    updateState2(tool, e) {
        this.setState({
            [tool]: e 
        })
      }

    reset() {
        this.setState({
            brand: "",
            model: "",
            description:"",
            s3_image: "",
            day_price: "",
            hour_price: "",
            week_price: "",
            deposit: "",
            rating: "",
            available: "",
            first_name: "",
            address:"",
            lat:"",
            lng:"" 
        })
    }
    createtool() {
        Geocode.fromAddress(this.state.address).then(response => {
            const { lat, lng } = response.results[0].geometry.location;

        const { brand, model, description, category_id, s3_image, day_price, hour_price, week_price, deposit, rating, available,first_name,address } = this.state;
        axios.post(`/api/tools`, { brand, model, description, category_id, s3_image, day_price, hour_price, week_price, deposit, rating, available,first_name, address, lat, lng})
        .then(response => {
            this.reset();
        })
    })}

    updatetool() {
        Geocode.fromAddress(this.state.address).then(response => {
            const { lat, lng } = response.results[0].geometry.location;
        console.log(this.props.match.params.tool_id)
        const {brand, model, description,  category_id, s3_image, day_price, hour_price, week_price, deposit, rating, available,first_name,address} = this.state;
        axios.put(`/api/tool-edit/${this.props.match.params.tool_id}`, { brand, model, description,  category_id, s3_image, day_price, hour_price, week_price, deposit, rating, available,first_name, address, lat,lng}).then(response => {

        })
    })}

    updateimg(s3_image, e) {
        this.setState({
            [s3_image]: e 
        })
      }
    handleFinishedUpload = info => {
    
        console.log('File uploaded with filename', info.filename)
        console.log('Access it on s3 at', info.fileUrl)
        this.updateimg("s3_image", info.fileUrl) 
    
      }
    render() {
        const uploadOptions = {
            server: process.env.REACT_APP_SERVER,
            signingUrlQueryParams: { uploadType: "avatar" }
          };
          const s3Url = `https://devmountainjason.s3.amazonaws.com`;
        console.log(this.props.location.pathname)
        console.log(this.state)


        var map = this.state.categories.map((e,i)=> {
            return(
              <div>
                 <input type="radio" name ="categories" value={this.state.category_id}  onChange={() => this.updateState2("category_id", i+1)}/><label>{e}</label>
              </div>
            )
          })
        return (
          
            <div className="form">
              <p>
            <h3>Update your tool info below or add a new tool for rent</h3>
            </p>
            <div className="formContainer">
                <div className="formImageContainer">
                    <img className="formImage" src={this.state.image || "https://www.quickanddirtytips.com/sites/default/files/styles/insert_medium/public/images/11066/clean-gardening-tools.png"} alt="Product"/>
                </div>
                <div className="formInput">
                <h2> Brand</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/ToolUpdate/add" ? this.state.brand : ""} onChange={(e) => this.updateState("brand", e)}/><br/>
                    <h2> Model</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/ToolUpdate/add" ? this.state.model : ""} onChange={(e) => this.updateState("model", e)}/><br/>
                     <h2>Description</h2> 
                    <input type="text" defaultValue={this.props.location.pathname !== "/ToolUpdate/add" ? this.state.description : ""} onChange={(e) => this.updateState("description", e)}/><br/>
                    <h2>Category</h2>
                    <div className="catdescrip">
                    {map}
                    </div>
                    {/* <input type="text" defaultValue={this.props.location.pathname !== "/ToolUpdate/add" ? this.state.category_id : ""} onChange={(e) => this.updateState("category_id", e)}/><br/> */}
                    <h2>Day price</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/ToolUpdate/add" ? this.state.day_price : ""} onChange={(e) => this.updateState("day_price", e)}/><br/>
                    <h2>Week price</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/ToolUpdate/add" ? this.state.week_price : ""} onChange={(e) => this.updateState("week_price", e)}/><br/>
                    <h2>Hour price</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/ToolUpdate/add" ? this.state.hour_price : ""} onChange={(e) => this.updateState("hour_price", e)}/><br/>
                    <h2>Deposit</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/ToolUpdate/add" ? this.state.deposit : ""} onChange={(e) => this.updateState("deposit", e)}/><br/>
                    <h2>First Name</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/ToolUpdate/add" ? this.state.first_name : ""} onChange={(e) => this.updateState("first_name", e)}/><br/>
                    <h2>Address</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/ToolUpdate/add" ? this.state.address : ""} onChange={(e) => this.updateState("address", e)}/><br/>
                    <h2>Drag image here or click box to upload!</h2>
         <div className = "dzuploader">
      <DropzoneS3Uploader 
        onFinish={this.handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
        id="imageUploader"
      />
      </div>
                    <div className="formButtons">
                    <Link to="/" className="cancel" onClick={() => this.reset()}>Cancel</Link>
                    { this.props.location.pathname === "/ToolUpdate/add" ?  <Link to="/ToolsForRent" className="create" onClick={() => this.createtool()}>Add to Listings</Link> : <Link to="/ToolsForRent" className="create" onClick={() => this.updatetool()}>Save  Changes</Link> }
                    </div>
                </div>

                
            </div>
            </div>
        )
    }
}
