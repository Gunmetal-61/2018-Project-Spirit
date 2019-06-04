import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";


import {
  organizationTags,
  orgCatTags,
  universityTags,
  fieldStudyTags,
  interestTypeTags,
  eventTypeTags
}from "variables/mvp_variables/TagList.jsx";


class Submit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const oTags = Object.entries(organizationTags).map(([key, value]) => (
      <Button color="info" id="0" size="sm">
        <span>
          {value}
        </span>
      </Button>
    ));
    const oCTags = Object.entries(orgCatTags).map(([key, value]) => (
      <Button color="info" id="0" size="sm">
        <span>
          {value}
        </span>
      </Button>
    ));
    const uTags = Object.entries(universityTags).map(([key, value]) => (
      <Button color="success" id="0" size="sm">
        <span>
          {value}
        </span>
      </Button>
    ));
    const fSTags = Object.entries(fieldStudyTags).map(([key, value]) => (
      <Button color="success" id="0" size="sm">
        <span>
          {value}
        </span>
      </Button>
    ));
    const iTTags = Object.entries(interestTypeTags).map(([key, value]) => (
      <Button color="warning" id="0" size="sm">
        <span>
          {value}
        </span>
      </Button>
    ));
    const eTTags = Object.entries(eventTypeTags).map(([key, value]) => (
      <Button color="warning" id="0" size="sm">
        <span>
          {value}
        </span>
      </Button>
    ));





    return(
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h1" style={{fontWeight: 'bold'}}>Submit an Event!</CardTitle>
              </CardHeader>
              <CardBody>
                <Form action="/" className="form-horizontal" method="get">
                  <Row>
                    <Label sm="2">Event Name</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                        <span className="form-text">
                          {`A block of help text that breaks onto a new line.`}
                        </span>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Event Subtitle</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Event Description</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Start Date</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Start Time</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">End Date</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">End Time</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Organization Name</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Location/Venue Name</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Street</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">City</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">State</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Country</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Zipcode</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Info URL A</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Info URL B</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Sign-Up URL</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Image</Label>
                    <Col sm="10">
                      <FormGroup>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>



                  <Row>
                    <Label sm="2">Organizations</Label>
                    <Col sm="10">
                      {oTags}
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Organization Category</Label>
                    <Col sm="10">
                      {oCTags}
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">University</Label>
                    <Col sm="10">
                      {uTags}
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Field of Study</Label>
                    <Col sm="10">
                      {fSTags}
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Interest Type</Label>
                    <Col sm="10">
                      {iTTags}
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Event Type</Label>
                    <Col sm="10">
                      {eTTags}
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Submit;
