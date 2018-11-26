import React, { Component } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

class FAQs extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <ListGroup flush>
        <ListGroupItem>
          <ListGroupItemHeading onClick={this.toggle}>
          Why should I use Daddy's Garage?
          </ListGroupItemHeading>
          <Collapse isOpen={!this.state.collapse} ref="q1">
            <Card>
              <CardBody>
        1.You don't have to pay for expensive tools that you only use once.<br></br>
        2.You can list your tools to make some extra money!<br></br>
        3.It feels good to help your neighbors.         
             </CardBody>
            </Card>
          </Collapse>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading onClick={this.toggle}>What if someone damages my item?</ListGroupItemHeading>
          <Collapse isOpen={!this.state.collapse}>
            <Card>
              <CardBody>
              The borrower is responsible for all damages caused to your rented item and 
        the appropriate amount will be deducted from the deposit in case of damage.
              </CardBody>
            </Card>
          </Collapse>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading onClick={this.toggle}>What if someone gets injured while using my item?</ListGroupItemHeading>
          <Collapse isOpen={!this.state.collapse}>
            <Card>
              <CardBody>
              The lender is not responsible for any injuries caused by the renter. The lender only has responsibility to make sure the 
        equipment is functioning properly at the time of rental.
              </CardBody>
            </Card>
          </Collapse>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading onClick={this.toggle}>How do I get paid for lending out an item?</ListGroupItemHeading>
          <Collapse isOpen={!this.state.collapse}>
            <Card>
              <CardBody>
              Payments are processed via stripe using credit card then sent directly to you.
              </CardBody>
            </Card>
          </Collapse>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading onClick={this.toggle}>Who can rent an item?</ListGroupItemHeading>
          <Collapse isOpen={!this.state.collapse}>
            <Card>
              <CardBody>
              Anyone who is over 18 can rent an item from Daddy's Garage
              </CardBody>
            </Card>
          </Collapse>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default FAQs;
