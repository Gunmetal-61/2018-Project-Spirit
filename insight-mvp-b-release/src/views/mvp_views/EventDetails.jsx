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


const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);


class EventDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
        <div className="content">
          <Row>
            <Col sm="12">
              <Card className="tags">
                <CardImg top height="150px" src={require("assets/img/card-danger.png")} alt="..."/>
              </Card>
            </Col>
            <Col sm="8">
              <Card className="main-detail">
                <CardHeader>
                  <Row>
                    <Col xs="12">
                      <CardTitle tag="h1">Event Title</CardTitle>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <h4 className="event-subtitle">Event Subtitle</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">
                      <h5 className="event-subtitle">April 20, 1969 00:00-16:00</h5>
                    </Col>
                    <Col xs="4">
                      <h5 className="event-subtitle">33000 Arroyo Drive, Irvine CA 92617</h5>
                    </Col>
                    <Col xs="4">
                      <h5 className="event-subtitle">30 RSVP'ed</h5>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <p className="event-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                  Signup URL
                  </p>
                  <p>
                  Info URL #1
                  </p>
                  <p>
                  Info URL #2
                  </p>
                  <Row>
                    <Col>
                      <Button
                        color="info"
                        id="0"
                        size="sm"
                        tag="label"
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          RSVP
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="0"
                        size="sm"
                        tag="label"
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Bookmark
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="0"
                        size="sm"
                        tag="label"
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Export to Google Calendar
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card className="photos">
                <CardHeader>
                  <CardTitle tag="h3">Photos</CardTitle>
                </CardHeader>
                <CardBody>

                </CardBody>
              </Card>

              <Card className="about-org">
                <CardHeader>
                  <CardTitle tag="h3">About the Organizer</CardTitle>
                </CardHeader>
                <CardBody>
                  <Button
                    color="info"
                    id="0"
                    size="sm"
                    tag="label"
                  >
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      Keep track of events by this organizer
                    </span>
                    <span className="d-block d-sm-none">
                      <i className="tim-icons icon-single-02" />
                    </span>
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="tags">
                <CardHeader>
                  <CardTitle tag="h3">Event Tags</CardTitle>
                </CardHeader>
                <CardBody>
                <Row>
                  <Col>
                    <Button
                      color="info"
                      id="0"
                      size="sm"
                      tag="label"
                    >
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Tag 1
                      </span>
                      <span className="d-block d-sm-none">
                        <i className="tim-icons icon-single-02" />
                      </span>
                    </Button>
                    <Button
                      color="info"
                      id="0"
                      size="sm"
                      tag="label"
                    >
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Tag 2
                      </span>
                      <span className="d-block d-sm-none">
                        <i className="tim-icons icon-single-02" />
                      </span>
                    </Button>
                  </Col>
                </Row>
                </CardBody>
              </Card>

              <Card className="mini-map">
                <CardHeader>
                  <CardTitle tag="h3">Map</CardTitle>
                </CardHeader>
                <CardBody>
                <div className="map" id="regularMap">
                  <RegularMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBiEsf9m2Sj7CRPr99keBWB1OtpFdFXfTc"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={
                      <div
                        style={{
                          height: `500px`,
                          borderRadius: `.2857rem`,
                          overflow: `hidden`
                        }}
                      />
                    }
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default EventDetails;
