import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

import axios from "axios";

import "./Contact.css";

class Contact extends Component {
  state = {
    contentObj: {
      contentBody: "",
      contactName: "",
      contactEmail: ""
    },
    errorKeys: [],
    snackBarMsg: "",
    open: false
  };
  handleChange = ({ target: { name, value } }) => {
    let newState = Object.assign({}, this.state, {
      contentObj: Object.assign({}, this.state.contentObj, {
        [name]: value
      })
    });
    this.setState(newState);
  };
  validateEmail = () => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.state.contentObj.contactEmail);
  };
  handleFormSubmit = e => {
    let {
      state: { contentObj }
    } = this;
    let { contentBody, contactName } = contentObj;
    let emailIsValid = this.validateEmail();
    if (!contentBody || !contactName || !emailIsValid) {
      var errorKeys = Object.keys(contentObj).filter(k => !contentObj[k]);
      if (!emailIsValid) errorKeys.push("contactEmail");
      this.setState({
        errorKeys,
        open: true,
        snackBarMsg: "Error in form, please correct and resubmit."
      });
    } else {
      axios
        .post("/api/contact", contentObj)
        .then(res => {
          this.setState({
            contentObj: {
              contentBody: "",
              contactName: "",
              contactEmail: ""
            },
            errorKeys: [],
            snackBarMsg: "Thanks for the message. Our trained pros will get back to you!",
            open: true
          });
        })
        .catch(err => {
          this.setState({
            snackBarMsg:
              "Something went wrong, try again, if error persists, try e-mailing us directly"
          });
        });
    }
  };
  handleClick = () => {
    this.setState({ open: true });
  };
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };
  render() {
    let { errorKeys, snackBarMsg } = this.state;
    return (
      <div id="Contact">
        <h3>
          <center>Contact</center>
        </h3>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{snackBarMsg}</span>}
        />
        <FormControl fullWidth={true}>
          <div id="form-control">
            <Input
              style={{
                color: errorKeys.includes("contactName") && "red"
              }}
              onChange={this.handleChange}
              fullWidth={true}
              name="contactName"
              inputProps={{
                placeholder: "Name",
                value: this.state.contentObj.contactName
              }}
            />
            <Input
              style={{
                color: errorKeys.includes("contactEmail") && "red"
              }}
              onChange={this.handleChange}
              fullWidth={true}
              name="contactEmail"
              inputProps={{
                placeholder: "Email",
                value: this.state.contentObj.contactEmail
              }}
            />
            <Input
              style={{
                color: errorKeys.includes("contentBody") && "red"
              }}
              onChange={this.handleChange}
              fullWidth={true}
              name="contentBody"
              multiline={true}
              rows={12}
              inputProps={{
                placeholder: "Question, comment, concern, lonely? We can help you!",
                value: this.state.contentObj.contentBody
              }}
            />
          </div>
          <Button
          className="loginlink"
            // id="contact-button"
            // color={"primary"}
            // fullWidth={false}
            // size={"medium"}
            // variant={"text"}
            onClick={this.handleFormSubmit}
          >
            Submit
          </Button>
        </FormControl>
      </div>
    );
  }
}
export default Contact;




// import React, { Component } from 'react';
// // import './App.css';

// class Contact extends Component {

//   state = {
//     email: {
//       recipient: '',
//       sender: '',
//       subject: '',
//       text: ''
//     }
//   }

//   sendEmail = _ => {
//     const { email } = this.state;
//     fetch(`http://127.0.0.1:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
//       .catch(err => console.error(err))
//   }

//   render() {
//     const { email } = this.state;
//     const spacer = {
//       margin: 10
//     }
//     const textArea = {
//       borderRadius: 4
//     }
//     return (
//       <div className="App">
//         <div style={{ marginTop: 10 }} >
//           <h2> Send Email </h2>
//           <label> Recipient </label>
//           <br />
//           <input value={email.recipient}
//             onChange={e => this.setState({ email: { ...email, recipient: e.target.value } })} />
//           <div style={spacer} />
//           <label> Sender </label>
//           <br />
//           <input value={email.sender}
//             onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
//           <div style={spacer} />
//           <label> Subject </label>
//           <br />
//           <input value={email.subject}
//             onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
//           <div style={spacer} />
//           <label> Message </label>
//           <br />
//           <textarea rows={3} value={email.text} style={textArea}
//             onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
//           <div style={spacer} />
//           <button onClick={this.sendEmail}> Send Email </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Contact;