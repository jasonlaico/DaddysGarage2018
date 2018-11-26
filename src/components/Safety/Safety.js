import React, { Component } from "react";
import "./Safety.css";
import drillgaze from "./drillgaze.jpg"

class Safety extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="safe">
        <p className="safety">
        <h3>Use Protection</h3>
         Daddy’s Garage wants you to keep safe during your equipment use. If you have any questions about how to operate 
         the tool or machine, consult a professional, users manual, or the owner for guidance. We are not liable for injuries caused
         by improper use of loaned equipment.<br></br><br></br> Make sure you have proper PPE (personal protective equipment) to protect against harmful vapors,
         loud noise, flying debris, heat and flames, electrical shock, and corrosive substances.  If the tool you are trying to 
         use is heavy, please use proper lifting technique and team lifting to avoid injury while transporting. 

        </p>
       <img className="safetyimg" src={drillgaze} alt="girlwdrill"/>

      
      </div>
    );
  }
}
export default Safety;