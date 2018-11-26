import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./Marketplaceupdate.css";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";

export default class Marketplaceupdate extends Component {
    constructor() {
        super();

        this.state = {
            s3_image: "",
            tool_price: "",
            description:"",
            brand: "",
            model: "",
            category: "",
            phone: "",
        }

   
    }

    componentDidMount() {
        axios.get(`/api/marketlisting/`).then(response => {
            const number = response.data.find(e => e.listing_id === +this.props.match.params.id)
            console.log(this.props.match.params.id)
            console.log(number)
            console.log(response.data)
            console.log(this.props)
            // find listing_id that matches this.props.match.params.id
            this.props.location.pathname !== `/Marketplaceupdate/add` && 
            this.setState({           
                s3_image: number.s3_image,
                tool_price: number.tool_price,
                description: number.description,
                brand: number.brand,
                model: number.model,
                category: number.category,
                phone: number.phone
             })

            // this.setState({           
            //     s3_image: product.s3_image,
            //     tool_price: product.tool_price,
            //     description: product.description,
            //     brand: product.brand,
            //     model: product.model,
            //     category: product.category,
            //     phone: product.phone
            //  })
        });
    }
   

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

    reset() {
        this.setState({
            s3_image: "",
            tool_price: 0,
            description:"",
            brand: "",
            model: "",
            category: "",
            phone: ""
        })
    }
    createmarketlisting() {
        const { s3_image, tool_price, description, brand, model, category, phone} = this.state;
        axios.post(`/api/marketlisting`, { s3_image, tool_price, description, brand, model, category, phone})
        .then(response => {
            this.reset();
        })
    }

    updatemarketlisting() {
        console.log(this.props.match.params.id)
        const {s3_image, tool_price, description, brand, model, category, phone} = this.state;
        axios.put(`/api/marketlisting/${this.props.match.params.id}`, { s3_image, tool_price, description, brand, model, category, phone}).then(response => {

        })
    }


    render() {
        const uploadOptions = {
            server: process.env.REACT_APP_SERVER,
            signingUrlQueryParams: { uploadType: "avatar" }
          };
          const s3Url = `https://devmountainjason.s3.amazonaws.com`;
          
        console.log(this.props.location.pathname)
        console.log(this.state)
        return (
          
            <div className="form">
              <p>
            Have any tools you want to sell? List them here and make some money!
            </p>
            <div className="formContainer">
                <div className="formImageContainer">
                    <img className="formImage" src={this.state.image || "https://www.quickanddirtytips.com/sites/default/files/styles/insert_medium/public/images/11066/clean-gardening-tools.png"} alt="Product"/>
                </div>
                <div className="formInput">
                    
                    <h2>Price</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/Marketplaceupdate/add" ? this.state.tool_price : ""} onChange={(e) => this.updateState("tool_price", e)}/>
                    <h2> Brand</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/Marketplaceupdate/add" ? this.state.brand : ""} onChange={(e) => this.updateState("brand", e)}/><br/>
                    <h2> Model</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/Marketplaceupdate/add" ? this.state.model : ""} onChange={(e) => this.updateState("model", e)}/><br/>
                    <h2>Description</h2> 
                    <input type="text" defaultValue={this.props.location.pathname !== "/Marketplaceupdate/add" ? this.state.description : ""} onChange={(e) => this.updateState("description", e)}/><br/>
                    <h2>Category</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/Marketplaceupdate/add" ? this.state.category : ""} onChange={(e) => this.updateState("category", e)}/><br/>
                    <h2>Phone</h2>
                    <input type="text" defaultValue={this.props.location.pathname !== "/Marketplaceupdate/add" ? this.state.phone : ""} onChange={(e) => this.updateState("phone", e)}/><br/>
                    <h2>Drag image here or click box to upload!</h2>
     <div className="dzuploader"> 
     <DropzoneS3Uploader 
        onFinish={this.handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
        id="imageUploader"
      />
      </div>

                    <div className="formButtons">
                    <Link to="/" className="cancel" onClick={() => this.reset()}>Cancel  </Link>
                    { this.props.location.pathname === "/Marketplaceupdate/add" ?  <Link to="/Marketplace" className="create" onClick={() => this.createmarketlisting()}>Add to Listings</Link> : <Link to="/Marketplace" className="create" onClick={() => this.updatemarketlisting()}>Save  Changes</Link> }
                    </div>
                </div>

                
            </div>
            </div>
        )
    }
}
