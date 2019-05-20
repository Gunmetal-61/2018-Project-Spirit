import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";


// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardImg,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Progress,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import EventDetails from "../mvp_views/EventDetails.jsx"


class Dash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="content">
        <Row>
          <Col sm="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h1">Following</CardTitle>
              </CardHeader>
              <CardBody>
                <EventDetails>
                </EventDetails>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h1">From Your School Department</CardTitle>
              </CardHeader>
              <CardBody>

              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h1">New on Insight</CardTitle>
              </CardHeader>
              <CardBody>

              </CardBody>
            </Card>

            <Card>
            <CardHeader>
              <CardTitle tag="h1">Your Recent Activity</CardTitle>
              </CardHeader>
              <CardBody>

              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>
    );
  }
}

export default Dash;
