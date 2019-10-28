import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";


// reactstrap components
import {
  Card,
  CardHeader,
  CardContent,
  Grid
} from "@material-ui/core";

// core components
import EventCard from "components/-insight/EventCard.jsx"
import EventName from "components/-insight/EventName.jsx"

import {
  aiCareerPanel,
  hackNights,
  iceSkate,
  acmComp,
  asuci
} from "variables/-insight/EventListingData.jsx";

class Dash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="content">
        <Grid container>
          <Grid item xl="4" lg="6">
            <Card>
              <CardHeader>
                <h1>Following</h1>
              </CardHeader>
              <CardContent>
                <EventCard eventInfo={aiCareerPanel}>
                </EventCard>
                <EventCard eventInfo={iceSkate}>
                </EventCard>
                <EventCard eventInfo={asuci}>
                </EventCard>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xl="4" lg="6">
            <Card>
              <CardHeader>
                <h1>From Your Field of Study</h1>
              </CardHeader>
              <CardContent>
                <EventCard eventInfo={aiCareerPanel}>
                </EventCard>
                <EventCard eventInfo={hackNights}>
                </EventCard>
                <EventCard eventInfo={acmComp}>
                </EventCard>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xl="4" lg="12">
            <Card>
              <CardHeader>
                <h1>New on Insight</h1>
              </CardHeader>
              <CardContent>
                <EventName eventInfo={asuci}>
                </EventName>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h1>Your Recent Activity</h1>
              </CardHeader>
              <CardContent>
                <EventName eventInfo={hackNights}>
                </EventName>
                <EventName eventInfo={acmComp}>
                </EventName>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </div>
    );
  }
}

export default Dash;
