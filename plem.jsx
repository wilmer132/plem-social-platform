import React from 'react';
import {Grid, Typography} from '@material-ui/core';
class PlemComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container>
        <Grid>
          <Typography>Hello There!</Typography>
        </Grid>
      </Grid>
    );
  }
}