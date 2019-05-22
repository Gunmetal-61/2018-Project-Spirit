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
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.jsx";


// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


class EventDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {eventInfo} = this.props;
    return(
      <div className="content">
        <Row>
          <Col sm="12">
            <Card className="main-detail" style={{backgroundColor: 'DarkSalmon'}}>
              <CardBody>
                <Row>
                  <Col xs="8">
                    <CardTitle tag="h3" style={{fontWeight: 'bold', padding: 0, margin: 0}}>{eventInfo.eventName}</CardTitle>
                  </Col>
                  <Col xs="4">
                    <h3 className="rsvp-count" style={{fontWeight: 'bold', padding: 0, margin: 0, textAlign: 'right'}}>{eventInfo.rsvpCount} RSVP'ed</h3>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12">
                    <h4 style={{padding: 0, margin: 0}}>{eventInfo.orgName}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{eventInfo.date}  {eventInfo.startTime}-{eventInfo.endTime}</h4>
                    <p className="event-location" style={{padding: 0, margin: 0}}>{eventInfo.location.altLocText}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{eventInfo.location.city}, {eventInfo.location.state}</p>
                  </Col>
                </Row>

                <hr />

                <Row className="float-right">
                  <Col>
                    <Button color="info" id="0" size="sm">
                    <span>
                      RSVP
                    </span>
                    </Button>
                    <Button color="info" id="0" size="sm">
                      <span>
                        Bookmark
                      </span>
                    </Button>
                    <Button color="info" id="0" size="sm">
                    <span>
                      Export
                    </span>
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EventDetails;
