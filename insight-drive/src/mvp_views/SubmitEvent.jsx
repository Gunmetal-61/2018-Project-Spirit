import React from "react";
// nodejs library that concatenates classes
import ReactDatetime from "react-datetime";
// react plugin that creates an input with badges

import SubmitEventStore from "mvp_stores/SubmitEventStore.jsx";
import SubmitEventActions from "mvp_actions/SubmitEventActions.jsx";


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
}from "mvp_variables/TagList.jsx";


class SubmitEvent extends React.Component {
  constructor(props) {
    console.log("1");
    super(props);
    console.log("2");
    this.state = SubmitEventStore.getState();
    console.log(this.state);
    this.onChange = this.onChange.bind(this);
    console.log("4");
  }

  componentDidMount() {
    SubmitEventStore.listen(this.onChange);
  }

  componentWillUnmount() {
    SubmitEventStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
    console.log(this.state.name);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("80");
    console.log(this.name);
    console.log(this.state.name);
    console.log(this.state.subtitle);
    console.log(this.state.description);
    console.log(this.state.rsvpCount);
    console.log(this.state.startDate);
    console.log(this.state.endDate);
    console.log(this.state.org);
    console.log(this.state.locName);
    console.log(this.state.street);
    console.log(this.state.city);
    console.log(this.state.state);
    console.log(this.state.country);
    console.log(this.state.subtitle);
    console.log(this.state.zipcode);

    var name = this.state.name.trim();
    var subtitle = this.state.subtitle.trim();
    var description = this.state.description.trim();
    var rsvpCount = this.state.rsvpCount.trim();
    var startDate = this.state.startDate.trim();
    var endDate = this.state.endDate.trim();
    var org = this.state.org.trim();
    var locName = this.state.locName.trim();
    var street = this.state.street.trim();
    var city = this.state.city.trim();
    var state = this.state.state.trim();
    var country = this.state.country.trim();
    var subtitle = this.state.subtitle.trim();
    var zipcode = this.state.zipcode.trim();

    SubmitEventActions.addEvent(name, subtitle, description, rsvpCount, startDate, endDate, org,
      locName, street, city, state, country, zipcode);
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
                <CardTitle tag="h1" style={{textAlign: 'center', fontWeight: 'bold'}}>Submit an Event!</CardTitle>
                <hr />
              </CardHeader>
              <CardBody>
                
                
                <Form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal" method="get">
                  <Card style={{backgroundColor: '#385170'}}>
                    <h3 style={{textAlign: 'center', padding: 0, margin: 5}}>Basic Info</h3>
                    <Row>
                      <Label sm="2">Event Name</Label>
                      <Col sm="10">
                        <FormGroup>
                          <Input type="text" value={this.state.name} onChange={SubmitEventActions.updateName} autoFocus/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Event Subtitle</Label>
                      <Col sm="10">
                        <FormGroup>
                          <Input type="text" value={this.state.subtitle} onChange={SubmitEventActions.updateSubtitle}/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Event Description</Label>
                      <Col sm="10">
                        <FormGroup>
                          <Input type="textarea" value={this.state.description} onChange={SubmitEventActions.updateDescription}/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Org/Organizer Name</Label>
                      <Col sm="10">
                        <FormGroup>
                          <Input type="text" value={this.state.org} onChange={SubmitEventActions.updateOrg}/>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Card>


                  <Card style={{backgroundColor: '#385170'}}>
                    <h3 style={{textAlign: 'center', padding: 0, margin: 5}}>Time</h3>
                    <Row>
                      <Label sm="2">Start</Label>
                      <Col sm="10">
                        <FormGroup>
                          <ReactDatetime
                            inputProps={{
                              className: "form-control",
                              placeholder: "Date"
                            }}
                            value={this.state.startDate} 
                            onChange={SubmitEventActions.updateStartDate}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Label sm="2">End</Label>
                      <Col sm="10">
                        <FormGroup>
                          <ReactDatetime
                            inputProps={{
                              className: "form-control",
                              placeholder: "Date"
                            }}
                            value={this.state.endDate} 
                            onChange={SubmitEventActions.updateEndDate}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Card>
                  

                  <Card style={{backgroundColor: '#385170'}}>
                    <h3 style={{textAlign: 'center', padding: 0, margin: 5}}>Location</h3>
                    <Row>
                      <Label sm="2">Location/Venue Name</Label>
                      <Col sm="10">
                        <FormGroup>
                          <Input type="text" 
                            placeholder="e.g. &quot;Student Center Pacific Ballroom B&quot;"
                            value={this.state.locName} 
                            onChange={SubmitEventActions.updateLocName}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Address</Label>
                      <Col sm="10">
                        <FormGroup>
                          <Input type="text" 
                            placeholder="Street"
                            value={this.state.street} 
                            onChange={SubmitEventActions.updateStreet}  
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2"></Label>
                      <Col sm="3">
                        <FormGroup>
                          <Input type="text" 
                            placeholder="City"
                            value={this.state.city} 
                            onChange={SubmitEventActions.updateCity}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="3">
                        <FormGroup>
                          <Input type="text" 
                            placeholder="State"
                            value={this.state.state} 
                            onChange={SubmitEventActions.updateState}  
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="2">
                        <FormGroup>
                          <Input type="text" 
                            placeholder="Country"
                            value={this.state.country} 
                            onChange={SubmitEventActions.updateCountry}  
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="2">
                        <FormGroup>
                          <Input type="text" 
                            placeholder="Zip"
                            value={this.state.zipcode} 
                            onChange={SubmitEventActions.updateZipcode}  
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Card>
                    
                  
                  <Card style={{backgroundColor: '#385170'}}>
                    <h3 style={{textAlign: 'center', padding: 0, margin: 5}}>Additional Info</h3>
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
                  </Card>
                  
                  
                  <Card style={{backgroundColor: '#385170'}}>
                    <h3 style={{textAlign: 'center', padding: 0, margin: 5}}>Tags</h3>
                    <Row>
                      <Label sm="2">Organizations</Label>
                      <Col sm="10">
                        {oTags}
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Label sm="2">Organization Category</Label>
                      <Col sm="10">
                        {oCTags}
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Label sm="2">University</Label>
                      <Col sm="10">
                        {uTags}
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Label sm="2">Field of Study</Label>
                      <Col sm="10">
                        {fSTags}
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Label sm="2">Interest Type</Label>
                      <Col sm="10">
                        {iTTags}
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Label sm="2">Event Type</Label>
                      <Col sm="10">
                        {eTTags}
                      </Col>
                    </Row>
                  </Card>
                  <hr />
                  
                  <Row>
                    <Col>
                      <div style={{textAlign: 'center'}}>
                        <Button type='submit' color="primary" id="0" size="lg">
                          <span>
                            <h3 style={{padding: 0, margin: 0}}>Submit</h3>
                          </span>
                        </Button>
                      </div>
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

export default SubmitEvent;
