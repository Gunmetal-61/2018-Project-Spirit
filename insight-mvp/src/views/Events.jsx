import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";


class Events extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bigChartData: "data1"
      };
    }
    setBgChartData = name => {
      this.setState({
        bigChartData: name
      });
    };
    render() {
      return (
        <Col className="text-left" sm="6">
            <h5 className="card-category">Total Shipments</h5>
            <CardTitle tag="h2">Performance</CardTitle>
        </Col>
      );
    }
  }


export default Events;
