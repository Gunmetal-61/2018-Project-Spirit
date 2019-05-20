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
  CardImg
} from "reactstrap";


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
              <Card className="event-options">
                <ButtonGroup>
                  <Button color="info" type="button">
                    Group
                  </Button>
                  <Button color="info" type="button">
                    Group Type
                  </Button>
                  <Button color="info" type="button">
                    School Department
                  </Button>
                  <Button color="info" type="button">
                    Interest
                  </Button>
                  <Button color="info" type="button">
                    Event Type
                  </Button>
                  <Button color="info" type="button">

                  </Button>
                </ButtonGroup>
                <UncontrolledDropdown>
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
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <Card className="tags">
                <CardImg top height="150px" src={require("assets/img/card-danger.png")} alt="..."/>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <Card className="tags">
                <CardImg top height="150px" src={require("assets/img/card-danger.png")} alt="..."/>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <Card className="tags">
                <CardImg top height="150px" src={require("assets/img/card-danger.png")} alt="..."/>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <Card className="tags">
                <CardImg top height="150px" src={require("assets/img/card-danger.png")} alt="..."/>
              </Card>
            </Col>
          </Row>
        </div>
      </>

    );
  }
}

export default EventDetails;
