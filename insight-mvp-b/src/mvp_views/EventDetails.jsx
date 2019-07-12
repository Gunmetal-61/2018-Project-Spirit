import React from "react";
import Lightbox from 'react-images';

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
} from "mvp_variables/EventListingData.jsx";

const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 33.644141, lng: -117.841902 }}
      defaultOptions={{
        scrollwheel: false
      }}
    >
      <Marker position={{ lat: 33.644141, lng: -117.841902 }} />
    </GoogleMap>
  ))
);


class EventDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const organizationTags = acmComp.tags.organization.map((x) => (
      <Button color="info" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));
    const orgCatTags = acmComp.tags.orgCat.map((x) => (
      <Button color="info" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));
    const universityTags = acmComp.tags.university.map((x) => (
      <Button color="success" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));
    const fieldStudyTags = acmComp.tags.fieldStudy.map((x) => (
      <Button color="success" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));
    const interestTypeTags = acmComp.tags.interestType.map((x) => (
      <Button color="warning" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));
    const eventTypeTags = acmComp.tags.eventType.map((x) => (
      <Button color="warning" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));

    const LIGHTBOX_IMAGE_SET = [
      {
        src: 'http://example.com/example/img1.jpg',
        caption: 'A forest',
        // As an array
        srcSet: [
          'http://example.com/example/img1_1024.jpg 1024w',
          'http://example.com/example/img1_800.jpg 800w',
          'http://example.com/example/img1_500.jpg 500w',
          'http://example.com/example/img1_320.jpg 320w',
        ],
      },
    ];

    return(
      <>
        <div className="content">
          <Row>
            <Col sm="12">
              <Card className="tags">
                <CardImg top height="200px" style={{objectFit: 'cover'}} src={require("mvp-img/ai-career-banner.jpg")} alt="..."/>
              </Card>
            </Col>
            <Col sm="8">
              <Card className="main-detail">
                <CardHeader>
                  <Row>
                      <Col xs="8">
                        <CardTitle tag="h1" style={{fontWeight: 'bold', padding: 0, margin: 0}}>{acmComp.listing.eventName}</CardTitle>
                      </Col>
                      <Col xs="4">
                        <h2 className="rsvp-count" style={{fontWeight: 'bold', padding: 0, margin: 0, textAlign: 'right'}}>{acmComp.listing.rsvpCount} RSVP'ed</h2>
                      </Col>
                    </Row>
                  <Row>
                    <Col xs="12">
                    <h4 style={{padding: 0, margin: 0}}>{acmComp.listing.orgName}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{acmComp.listing.date}  {acmComp.listing.startTime}-{acmComp.listing.endTime}</h4>
                    <p className="event-location" style={{padding: 0, margin: 0}}>{acmComp.listing.location.altLocText}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{acmComp.listing.location.city}, {acmComp.listing.location.state}</p>
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
                  <CardTitle tag="h3">Photos of Past Events by ACM at UCI</CardTitle>
                </CardHeader>
                <CardBody>
                  <Lightbox
                    images={[{ src: 'http://example.com/img1.jpg' }, { src: 'http://example.com/img2.jpg' }]}
                    // isOpen={this.state.lightboxIsOpen}
                    // onClickPrev={this.gotoPrevious}
                    // onClickNext={this.gotoNext}
                    // onClose={this.closeLightbox}
                  />
                </CardBody>
              </Card>

              <Card className="about-org">
                <CardHeader>
                  <CardTitle tag="h3" style={{padding: 0, margin: 0}}>About the Organizer</CardTitle>
                  <h4>{acmComp.listing.orgName}</h4>
                </CardHeader>
                <CardBody>
                  <p>
                  Members of ACM@UCI enjoy computer science and puzzles. We study algorithms and compete
                  in prestigious programming contests like ICPC and IEEExtreme. The overall mission of
                  our club is to maximize understanding of computer science topics and develop problem
                  solving skills that one would not generally learn in a classroom setting. To this end,
                  we organize several activities. Twice a week, we host meetings where members solve a
                  problem set. Also, we facilitate campuswide competitions for students to further hone
                  their skills. Every fall, we field teams in ICPC and IEEExtreme. Last year, all 5 teams
                  we sent to the SoCal ICPC Regional were in the top 25 out of 98, and 2 teams at IEEExtreme
                  were in the top 100 in the world. We also organize an annual 8 week seminar series where
                  club members present on a research topic of interest. Currently, our club consists of ~500
                  members, with an average attendance of 30 at our meetings.
                  </p>
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
