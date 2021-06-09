import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import './TopBar.css';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppBar position='absolute'>
        <Toolbar>
          <Typography>Plem</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;