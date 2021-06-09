import React from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Menu,
  MenuItem
} from '@material-ui/core';
import './TopBar.css';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppBar position='absolute' style={this.props.style}>
        <Toolbar style={{minHeight:'50px'}}>
          <IconButton>
            <Menu color='black' style={this.props.style}>
              <MenuItem>Profile</MenuItem>
            </Menu>
          </IconButton>
          <Typography variant='h6'>Plem</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;