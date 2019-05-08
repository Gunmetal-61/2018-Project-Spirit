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
                    <Col xs="6">
                      <h4 className="event-subtitle">Event Subtitle</h4>
                    </Col>
                    <Col xs="3">
                      <h4 className="event-subtitle">April 20, 1969 00:00-16:00</h4>
                    </Col>
                    <Col xs="3">
                      <h4 className="event-subtitle">Event Subtitle</h4>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <p className="event-description">
                    What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little "clever" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.
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
            </Col>
            <Col sm="4">
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

              <Card className="about-org">
                <CardHeader>
                  <CardTitle tag="h3">About the Organizer</CardTitle>
                </CardHeader>
                <CardBody>

                </CardBody>
              </Card>

              <Card className="tags">
                <CardHeader>
                  <CardTitle tag="h3">Event Tags</CardTitle>
                </CardHeader>
                <CardBody>

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
