import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Grid
} from "@material-ui/core";


class EventCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {eventInfo} = this.props;
    return(
      <div className="content">
        <Grid container>
          <Grid item sm="12">
            <Card className="main-detail" style={{backgroundcolor: '#c19191'}}>
              <CardContent>
                <Grid container>
                  <Grid item xs="8">
                    <CardHeader tag="h3" style={{fontWeight: 'bold', padding: 0, margin: 0}}>{eventInfo.listing.eventName}</CardHeader>
                  </Grid>
                  <Grid item xs="4">
                    <h3 className="rsvp-count" style={{fontWeight: 'bold', padding: 0, margin: 0, textAlign: 'right'}}>{eventInfo.listing.rsvpCount} RSVP'ed</h3>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs="12">
                    <h4 style={{padding: 0, margin: 0}}>{eventInfo.listing.orgName}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{eventInfo.listing.date}  {eventInfo.listing.startTime}-{eventInfo.listing.endTime}</h4>
                    <p className="event-location" style={{padding: 0, margin: 0}}>{eventInfo.listing.location.altLocText}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{eventInfo.listing.location.city}, {eventInfo.listing.location.state}</p>
                  </Grid>
                </Grid>

                <hr />

                <Grid container className="float-right">
                  <Grid item>
                    <Button Grid itemor="default" id="0" size="sm">
                    <span>
                      RSVP
                    </span>
                    </Button>
                    <Button Grid itemor="default" id="0" size="sm">
                      <span>
                        Bookmark
                      </span>
                    </Button>
                    <Button Grid itemor="default" id="0" size="sm">
                    <span>
                      Export
                    </span>
                    </Button>
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

export default EventCard;
