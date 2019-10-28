import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import {
  Card,
  CardHeader,
  CardContent,
  Grid
} from "@material-ui/core";


class EventName extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {eventInfo} = this.props;
    return(
      <div className="content">
        <Grid container>
          <Grid item sm="12">
            <Card className="main-detail" style={{backgroundColor: '#c19191'}}>
              <CardContent>
                <Grid container>
                  <Grid item xs="12">
                    <CardHeader tag="h4" style={{fontWeight: 'bold', padding: 0, margin: 0}}>{eventInfo.listing.eventName}</CardHeader>
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

export default EventName;
