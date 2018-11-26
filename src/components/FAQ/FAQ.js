import React, { Component } from "react";
import "./FAQ.css";
import FAQs from "./FAQs";
import "bootstrap/dist/css/bootstrap.css";
import "./FAQ.css";

class FAQ extends Component {
   constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
  return (
    <div className="App container">
 
      <FAQs />
    </div>
  );
}
}
 
export default FAQ;

// class FAQ extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <div id="FAQ">
//         <p className="question1">
//         Why should I use Daddy's Garage?
//         1.You don't have to pay for expensive tools that you only use once.
//         2.You can list your tools to make some extra money!
//         3.It feels good to help your neighbors.
//         </p>
        
//          <p className="question2">
//         What if someone damages my item?
//         The borrower is responsible for all damages caused to your rented item and 
//         the appropriate amount will be deducted from the deposit in case of damage.
//         </p>
//         <p className="question3">
//         What if someone gets injured while using my item?
//         The lender is not responsible for any injuries caused by the renter. The lender only has responsibility to make sure the 
//         equipment is functioning properly at the time of rental.
//         </p>
//         <p className="question4">
//         How do I get paid for lending out an item?
//         Payments are processed via stripe using credit card then sent directly to you.
//         </p>
//         <p className="question5">
//         Who can rent an item?
//         Anyone who is over 18 can rent an item from Daddy's Garage
//         </p>

   
   
//       </div>
//     );
//   }
// }
// export default FAQ;