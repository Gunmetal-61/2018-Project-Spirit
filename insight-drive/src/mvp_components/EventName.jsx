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
} from "template/variables/charts.jsx";


// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


class EventName extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {eventInfo} = this.props;
    return(
      <div className="content">
        <Row>
          <Col sm="12">
            <Card className="main-detail" style={{backgroundColor: '#c19191'}}>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <CardTitle tag="h4" style={{fontWeight: 'bold', padding: 0, margin: 0}}>{eventInfo.listing.eventName}</CardTitle>
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

export default EventName;
