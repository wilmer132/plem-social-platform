import React from 'react';
import ReactDom from 'react-dom'
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

ReactDom.render(
  <PlemComponent />,
  document.getElementById('plemapp')
);