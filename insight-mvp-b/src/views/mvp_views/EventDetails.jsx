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
                    <Col xs="6">
                      <h5 className="event-subtitle">April 20, 1969 00:00-16:00</h5>
                    </Col>
                    <Col xs="6">
                      <h5 className="event-subtitle">Event Subtitle</h5>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <p className="event-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </CardBody>
              </Card>

              <Card className="tags">
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

                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="tags">
                <CardHeader>
                  <CardTitle tag="h3">Event Tags</CardTitle>
                </CardHeader>
                <CardBody>

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
