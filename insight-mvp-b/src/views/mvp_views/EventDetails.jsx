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

// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import {
  aiCareerPanel,
  hackNights,
  iceSkate,
  acmComp,
  asuci
} from "variables/mvp_variables/EventListingData.jsx";

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
    const organizationTags = aiCareerPanel.tags.organization.map((x) => (
      <Button color="info" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));
    const orgCatTags = aiCareerPanel.tags.orgCat.map((x) => (
      <Button color="info" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));
    const universityTags = aiCareerPanel.tags.university.map((x) => (
      <Button color="success" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));
    const fieldStudyTags = aiCareerPanel.tags.fieldStudy.map((x) => (
      <Button color="success" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));
    const interestTypeTags = aiCareerPanel.tags.interestType.map((x) => (
      <Button color="warning" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));
    const eventTypeTags = aiCareerPanel.tags.eventType.map((x) => (
      <Button color="warning" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));

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
                      <Col xs="8">
                        <CardTitle tag="h1" style={{fontWeight: 'bold', padding: 0, margin: 0}}>{aiCareerPanel.listing.eventName}</CardTitle>
                      </Col>
                      <Col xs="4">
                        <h2 className="rsvp-count" style={{fontWeight: 'bold', padding: 0, margin: 0, textAlign: 'right'}}>{aiCareerPanel.listing.rsvpCount} RSVP'ed</h2>
                      </Col>
                    </Row>
                  <Row>
                    <Col xs="12">
                    <h4 style={{padding: 0, margin: 0}}>{aiCareerPanel.listing.orgName}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{aiCareerPanel.listing.date}  {aiCareerPanel.listing.startTime}-{aiCareerPanel.listing.endTime}</h4>
                    <p className="event-location" style={{padding: 0, margin: 0}}>{aiCareerPanel.listing.location.altLocText}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{aiCareerPanel.listing.location.city}, {aiCareerPanel.listing.location.state}</p>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <p className="event-description">{aiCareerPanel.listing.description}</p>
                  <hr />
                  <Row>
                    <Col sm="6">
                      <Row>
                        <Col>
                          <p style={{padding: 0, margin: 0}}>Actions</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Button color="default" id="0" size="sm">
                            <span>
                              RSVP
                            </span>
                          </Button>
                          <Button color="default" id="0" size="sm">
                            <span>
                              Bookmark
                            </span>
                          </Button>
                          <Button color="default" id="0" size="sm">
                            <span>
                              Export
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </Col>

                    <Col sm="6">
                      <Row>
                        <Col>
                          <p style={{padding: 0, margin: 0}}>External Links</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
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
                        </Col>
                      </Row>
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
                  {organizationTags}
                  {orgCatTags}
                  {universityTags}
                  {fieldStudyTags}
                  {interestTypeTags}
                  {eventTypeTags}
                </CardBody>
              </Card>

              <Card className="mini-map">
                <CardHeader>
                  <CardTitle tag="h3">Map</CardTitle>
                </CardHeader>
                <CardBody>
                <div className="map" id="regularMap">
                  <RegularMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCK13WMSXMGffLwJ7Ezy1VXOKEv6x0ePGk"
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
