import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";


// reactstrap components
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
  Card,
  CardBody,
  CardImg
} from "reactstrap";


import EventCard from "../mvp_components/EventCard.jsx"
import EventBar from "../mvp_components/EventBar.jsx"

import {
  aiCareerPanel,
  hackNights,
  iceSkate,
  acmComp,
  asuci
} from "variables/mvp_variables/EventListingData.jsx";


class EventDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
        <div className="content">
          <Card>
            <CardBody>
              <Row>
                <Col sm="12">
                  <Card className="event-options">
                    <CardBody>
                      <Row>
                        <Col sm="10">
                          <div className='text-center'>
                            <ButtonGroup>
                              <Button color="info" type="button">
                                Organization
                              </Button>
                              <Button color="info" type="button">
                                Org Category
                              </Button>
                              <Button color="success" type="button">
                                University
                              </Button>
                              <Button color="success" type="button">
                                Field of Study
                              </Button>
                              <Button color="warning" type="button">
                                Interest Type
                              </Button>
                              <Button color="warning" type="button">
                                Event Type
                              </Button>
                            </ButtonGroup>
                          </div>
                        </Col>

                        <Col sm="2">
                          <div className='text-center'>
                            <UncontrolledDropdown style={{width: 130}}>
                              <DropdownToggle
                                aria-expanded={false}
                                aria-haspopup={true}
                                caret
                                className="btn-block"
                                color="primary"
                                data-toggle="dropdown"
                                id="dropdownMenuButton"
                                type="button"
                              >
                                View As
                              </DropdownToggle>
                              <DropdownMenu aria-labelledby="dropdownMenuButton">
                                <DropdownItem header>
                                  List
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Cards
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Calendar
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Something else here
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col sm="12">
                  <EventBar eventInfo={aiCareerPanel}>
                  </EventBar>
                </Col>
              </Row>
              <Row>
                <Col sm="12">
                  <EventBar eventInfo={hackNights}>
                  </EventBar>
                </Col>
              </Row>
              <Row>
                <Col sm="12">
                  <EventBar eventInfo={iceSkate}>
                  </EventBar>
                </Col>
              </Row>
              <Row>
                <Col sm="12">
                  <EventBar eventInfo={acmComp}>
                  </EventBar>
                </Col>
              </Row>
              <Row>
                <Col sm="12">
                  <EventBar eventInfo={asuci}>
                  </EventBar>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </>

    );
  }
}

export default EventDetails;
