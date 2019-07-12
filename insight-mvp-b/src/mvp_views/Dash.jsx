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
import EventDetails from "./EventDetails.jsx"
import EventCard from "../mvp_components/EventCard.jsx"
import EventBar from "../mvp_components/EventBar.jsx"
import EventName from "../mvp_components/EventName.jsx"

import {
  aiCareerPanel,
  hackNights,
  iceSkate,
  acmComp,
  asuci
} from "mvp_variables/EventListingData.jsx";

class Dash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="content">
        <Row>
          <Col xl="4" lg="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h1">Following</CardTitle>
              </CardHeader>
              <CardBody>
                <EventCard eventInfo={aiCareerPanel}>
                </EventCard>
                <EventCard eventInfo={iceSkate}>
                </EventCard>
                <EventCard eventInfo={asuci}>
                </EventCard>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" lg="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h1">From Your Field of Study</CardTitle>
              </CardHeader>
              <CardBody>
                <EventCard eventInfo={aiCareerPanel}>
                </EventCard>
                <EventCard eventInfo={hackNights}>
                </EventCard>
                <EventCard eventInfo={acmComp}>
                </EventCard>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" lg="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h1">New on Insight</CardTitle>
              </CardHeader>
              <CardBody>
                <EventName eventInfo={asuci}>
                </EventName>
              </CardBody>
            </Card>

            <Card>
            <CardHeader>
              <CardTitle tag="h1">Your Recent Activity</CardTitle>
              </CardHeader>
              <CardBody>
                <EventName eventInfo={hackNights}>
                </EventName>
                <EventName eventInfo={acmComp}>
                </EventName>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>
    );
  }
}

export default Dash;
