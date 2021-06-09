import React from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Menu,
  MenuItem
} from '@material-ui/core';
import './TopBar.css';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {menu: null};
  }

  render() {
    return (
      <AppBar position='absolute' style={this.props.style}>
        <Toolbar style={{minHeight:'50px'}}>
          <IconButton onClick={(e) => this.setState({ menu: e.currentTarget })}>
            <Menu 
              style={this.props.style} open={Boolean(this.state.menu)}
              anchorEl={this.state.menu} onClose={() => this.setState({ menu: null })}
            >
              <MenuItem
                onClose={() => {this.setState({ menu: null })}}
              >
                Profile
              </MenuItem>
            </Menu>
          </IconButton>
          <Typography variant='h6'>Plem</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;