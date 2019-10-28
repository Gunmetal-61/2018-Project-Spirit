import React from "react";
// nodejs library that concatenates classes

import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Grid
} from "@material-ui/core";


class EventBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {eventInfo} = this.props;
    const organizationTags = eventInfo.tags.organization.map((x) => (
      <Button Gridor="info" id="0" size="sm">
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
        <Grid>
          <Grid item sm="12">
            <Card className="main-detail" style={{backgroundColor: '#c19191'}}>
              <CardContent>
                <Grid container>
                  <Grid item sm="1">
                    <img height="110px" width="110px" src={require("assets/-insight/img/" + `${eventInfo.listing.img}`)} alt="assets/-insight/img/uci.ico" />
                  </Grid>
                  <Grid item sm="11">
                    <Grid container>
                      <Grid item xs="8">
                        <CardHeader tag="h2" style={{fontWeight: 'bold', padding: 0, margin: 0}}>{eventInfo.listing.eventName}</CardHeader>
                      </Grid>
                      <Grid item xs="4">
                        <h2 className="rsvp-count" style={{fontWeight: 'bold', padding: 0, margin: 0, textAlign: 'right'}}>{eventInfo.listing.rsvpCount} RSVP'ed</h2>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item sm="3">
                        <Grid container>
                          <Grid item xs="12">
                            <h4 style={{padding: 0, margin: 0}}>{eventInfo.listing.orgName}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{eventInfo.listing.date}  {eventInfo.listing.startTime}-{eventInfo.listing.endTime}</h4>
                            <p className="event-location" style={{padding: 0, margin: 0}}>{eventInfo.listing.location.altLocText}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{eventInfo.listing.location.city}, {eventInfo.listing.location.state}</p>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sm="8">
                        <h3 className="event-desc" style={{padding: 0, margin: 0}}>{eventInfo.listing.eventSubtitle}</h3>

                      </Grid>
                      <Grid item sm="1">

                      </Grid>
                    </Grid>

                    <hr />

                    <Grid container>
                      <Grid item sm="3">
                        <Grid container>
                          <p style={{padding: 0, margin: 0}}>Actions</p>
                        </Grid>
                        <Grid container>
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
                        </Grid>
                      </Grid>

                      <Grid item sm="3">
                        <Grid container>
                          <p style={{padding: 0, margin: 0}}>External Links</p>
                        </Grid>
                        <Grid container>
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
                        </Grid>
                      </Grid>

                      <Grid item sm="6">
                        <Grid container>
                          <p style={{padding: 0, margin: 0}}>Tags</p>
                        </Grid>
                        <Grid container>
                          {organizationTags}
                          {orgCatTags}
                          {universityTags}
                          {fieldStudyTags}
                          {interestTypeTags}
                          {eventTypeTags}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default EventBar;
