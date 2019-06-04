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

class EventBar extends React.Component {
  constructor(props) {
    super(props);
  }

  // printTagLoop(tagArray) {
  //   // var i;
  //   // for (i = 0; i < tagArray.length; i++) {
  //     return(
  //       <div>
  //         <Button color="default" id="0" size="sm">
  //           <span>
  //             Info URL #1
  //           </span>
  //         </Button>
  //       </div>
  //     );
  //   // }
  // }
  //
  // renderTags(eventInfo) {
  //   printTagLoop(eventInfo.tags.organization);
  //   printTagLoop(eventInfo.tags.orgCat);
  //   printTagLoop(eventInfo.tags.university);
  //   printTagLoop(eventInfo.tags.fieldStudy);
  //   printTagLoop(eventInfo.tags.interestType);
  //   printTagLoop(eventInfo.tags.eventType);
  // }

  render() {
    const {eventInfo} = this.props;
    const organizationTags = eventInfo.tags.organization.map((x) => (
      <Button color="info" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));
    const orgCatTags = eventInfo.tags.orgCat.map((x) => (
      <Button color="info" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));
    const universityTags = eventInfo.tags.university.map((x) => (
      <Button color="success" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));
    const fieldStudyTags = eventInfo.tags.fieldStudy.map((x) => (
      <Button color="success" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));
    const interestTypeTags = eventInfo.tags.interestType.map((x) => (
      <Button color="warning" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));
    const eventTypeTags = eventInfo.tags.eventType.map((x) => (
      <Button color="warning" id="0" size="sm">
        <span>
          {x}
        </span>
      </Button>
    ));

    return(
      <div className="content">
        <Row>
          <Col sm="12">
            <Card className="main-detail" style={{backgroundColor: '#c19191'}}>
              <CardBody>
                <Row>
                  <Col sm="1">
                    <img height="110px" width="110px" src={require("assets/img/uci.ico")} alt="..." />
                  </Col>
                  <Col sm="11">
                    <Row>
                      <Col xs="8">
                        <CardTitle tag="h2" style={{fontWeight: 'bold', padding: 0, margin: 0}}>{eventInfo.listing.eventName}</CardTitle>
                      </Col>
                      <Col xs="4">
                        <h2 className="rsvp-count" style={{fontWeight: 'bold', padding: 0, margin: 0, textAlign: 'right'}}>{eventInfo.listing.rsvpCount} RSVP'ed</h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="3">
                        <Row>
                          <Col xs="12">
                            <h4 style={{padding: 0, margin: 0}}>{eventInfo.listing.orgName}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{eventInfo.listing.date}  {eventInfo.listing.startTime}-{eventInfo.listing.endTime}</h4>
                            <p className="event-location" style={{padding: 0, margin: 0}}>{eventInfo.listing.location.altLocText}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{eventInfo.listing.location.city}, {eventInfo.listing.location.state}</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm="8">
                        <h3 className="event-desc" style={{padding: 0, margin: 0}}>{eventInfo.listing.eventSubtitle}</h3>

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

                      <Col sm="6">
                        <Row>
                          <p style={{padding: 0, margin: 0}}>Tags</p>
                        </Row>
                        <Row>
                          {organizationTags}
                          {orgCatTags}
                          {universityTags}
                          {fieldStudyTags}
                          {interestTypeTags}
                          {eventTypeTags}
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

export default EventBar;
