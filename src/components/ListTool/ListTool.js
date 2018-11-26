// Form has input for 
// Tool name, brand, model, category, prices, description, availability
// S3 input for image uploads
// Details policies for rental
import React, { Component } from "react";
// import ReactS3 from 'react-s3'
// import { aws } from '../../keys';
import axios from "axios";
import {Link} from "react-router-dom";
import "./ListTool.css";
import Geocode from "react-geocode";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";


const config={
    bucketName: "devmountainjason",
    albumName: "devmountain",
    region: 'us-east-1',
    accessKeyId : process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY


}
class ListTool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      model: "",
      category: "",
      description:"",
      day_price: 0,
      hour_price: 0,
      week_price: 0,
      deposit:0,        
      s3_image: "https://s3.amazonaws.com/devmountainjason/devmountain/tool.jpg",        
      first_name: "",
      address:"",
      lat:"",
      lng:"",
      categories: [
        "Outdoor", "Home Improvement","Safety", "Woodworking", "Hardware", "Automotive", "Plumbing", " Electrical", "Recreational"
      ]
    
  }
}
  
componentDidMount() {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
  Geocode.enableDebug();
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

updateimg(s3_image, e) {
  this.setState({
      [s3_image]: e 
  })
}

reset() {
    this.setState({
      brand: "",
        model: "",
        category_id: "",
        description:"",
        day_price: 0,
        hour_price: 0,
        week_price: 0,
        deposit:0,        
        s3_image: "",        
        first_name: "",
        address:"",
        lat:"",
        lng:""   
    })
}
  createtool() {
    Geocode.fromAddress(this.state.address).then(response => {
      const { lat, lng } = response.results[0].geometry.location;

    const { user_id, brand, model, description, category_id, s3_image, day_price, hour_price,
      week_price, deposit, available, rating, first_name, address  } = this.state;

    axios.post(`/api/tools`, { user_id, brand, model, description, category_id, s3_image, day_price, hour_price,
      week_price, deposit, available, rating, first_name, address, lat, lng })
    .then(response => {
        this.reset() 
        ;
    })
})}

//s3 uploader below
  // upload(e){
  //     console.log(e.target.files[0])
  //     ReactS3.upload(e.target.files[0], config)
  //     .then ( (data)=> {
  //       console.log(data.location)
  //     })
  //     .catch((err)=>{
  //         alert(err)
  //     })
  // }

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
     console.log(this.state)

    var map = this.state.categories.map((e,i)=> {
      return(
        <div >
           <input type="radio" name ="categories" value={this.state.category_id}  onChange={() => this.updateState2("category_id", i+1)}/><label>{e}</label>
        </div>
      )
    })
    return (


      <div>
         <div className="formInput">
                 
                    <h2> Brand</h2>
                    <input type="text" value={this.state.brand} onChange={(e) => this.updateState("brand", e)}/><br/>
                    <h2> Model</h2>
                    <input type="text" value={this.state.model} onChange={(e) => this.updateState("model", e)}/><br/>
                    
                    <h2>Description</h2> 
                    <input type="text" value={this.state.description} onChange={(e) => this.updateState("description", e)}/><br/>
                    <h2>Category</h2>
                    <div className="catdescrip">
                    {map}
                    </div>
                    {/* <input type="radio" value={this.state.category_id}  onChange={() => this.updateState2("category_id", 1)}/>Outdoors<br/> */}
                    {/* <input type="radio" value={this.state.category_id}  onChange={() => this.updateState2("category_id", 2)}/>Home improvement<br/> */}
                   
                    {/* <input type="text" value={this.state.category_id} onChange={(e) => this.updateState("category_id", e)}/><br/> */}

                    <h2>Hourly Price</h2>
                    <input type="text" value={this.state.hour_price} onChange={(e) => this.updateState("hour_price", e)}/>
                    <h2>Day Price</h2>
                    <input type="text" value={this.state.day_price} onChange={(e) => this.updateState("day_price", e)}/>
                    <h2>Weekly Price</h2>
                    <input type="text"value= {this.state.week_price} onChange={(e) => this.updateState("week_price", e)}/>
                    <h2>Deposit</h2>
                    <input type="text" value={this.state.deposit} onChange={(e) => this.updateState("deposit", e)}/>
                    <h2>First Name</h2>
                    <input type="text" value={this.state.first_name} onChange={(e) => this.updateState("first_name", e)}/><br/>
                    <h2>Address</h2>
                    <input type="text" value={this.state.address} onChange={(e) => this.updateState("address", e)}/><br/>
 
                    <div>
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
      </div>
                    <div className="formButtons">
                    <Link to="/ListTool" className="cancel" onClick={() => this.reset()}>Cancel  </Link>
                    <Link to="/ToolsForRent" className="create" onClick={() => this.createtool()}>Add to Inventory</Link>  
                    {/* & alert("Submitted! Thank you for listing with us.") */}
                    </div>
                </div>

      {/* <div id="Upload">
        <p className="imgupload">
         Upload your tool image here
        </p>
        <input type="file"
        onChange={this.upload}/>
      </div> */}

     
 
      </div>
    );
  }
}
export default ListTool;

// import React, { Component } from "react";
// import DropzoneS3Uploader from "react-dropzone-s3-uploader";
// import { connect } from "react-redux";
// import { addImage } from "../../redux/mainReducer";
// require("dotenv").config();

// class S3Uploader extends Component {
//   constructor() {
//     super();
//     this.state = {
//       image: ""
//     };
//   }
//   handleFinishedUpload = info => {
//     console.log("File uploaded with filename", info.filename);
//     console.log("Access it on s3 at", info.fileUrl);
//     this.props.updateImage(info.fileUrl);
//     // await console.log(this.props.main.image);
//     // await this.setState({ image: this.props.main.image });
//   };

//   render() {
    // const uploadOptions = {
    //   server: process.env.REACT_APP_SERVER,
    //   signingUrlQueryParams: { uploadType: "avatar" }
    // };
    // const s3Url = `https://devmountainjason.s3.amazonaws.com`;
    // console.log("rendering...");
//     return (
//       <DropzoneS3Uploader
//         onFinish={this.handleFinishedUpload}
//         s3Url={s3Url}
//         maxSize={1024 * 1024 * 5}
//         upload={uploadOptions}
//         id="imageUploader"
//       >
//         {/* {!this.props.image_url ? (
//           <img
//             src={userDefaultPicture}
//             alt="default image"
//             className="profileImageDefault"
//           />
//         ) : (
//           <img
//             src={this.props.image_url}
//             className="profileImage"
//             alt="user profile image"
//           />
//         )} */}
//       </DropzoneS3Uploader>
//     );
//   }
// }
// const mapStateToProps = state => state;
// export default connect(
//   mapStateToProps,
//   { addImage }
// )(S3Uploader);

 