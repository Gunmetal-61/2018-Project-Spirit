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
                  <Col sm="1">
                    <img height="110px" width="110px" src={require("assets/img/uci.ico")} alt="..." />
                  </Col>
                  <Col sm="11">
                    <Row>
                      <Col xs="8">
                        <CardTitle tag="h2" style={{fontWeight: 'bold', padding: 0, margin: 0}}>{eventInfo.eventName}</CardTitle>
                      </Col>
                      <Col xs="4">
                        <h2 className="rsvp-count" style={{fontWeight: 'bold', padding: 0, margin: 0, textAlign: 'right'}}>{eventInfo.rsvpCount} RSVP'ed</h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="3">
                        <Row>
                          <Col xs="12">
                            <h4 style={{padding: 0, margin: 0}}>{eventInfo.orgName}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{eventInfo.date}  {eventInfo.startTime}-{eventInfo.endTime}</h4>
                            <p className="event-location" style={{padding: 0, margin: 0}}>{eventInfo.location.altLocText}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{eventInfo.location.city}, {eventInfo.location.state}</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm="8">
                        <h3 className="event-desc" style={{padding: 0, margin: 0}}>{eventInfo.eventSubtitle}</h3>

                      </Col>
                      <Col sm="1">

                      </Col>
                    </Row>

                    <hr />

                    <Row>
                      <Col sm="3">
                        <Row>
                          <p style={{padding: 0, margin: 0}}>Actions</p>
                        </Row>
                        <Row>
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
                        </Row>
                      </Col>

                      <Col sm="3">
                        <Row>
                          <p style={{padding: 0, margin: 0}}>External Links</p>
                        </Row>
                        <Row>
                          <Button color="default" id="0" size="sm">
                            <span>
                              Info URL #1
                            </span>
                          </Button>
                          <Button color="default" id="0" size="sm">
                            <span>
                              Info URL #2
                            </span>
                          </Button>
                          <Button color="default" id="0" size="sm">
                            <span>
                              Signup URL
                            </span>
                          </Button>
                        </Row>
                      </Col>
                    </Row>
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
