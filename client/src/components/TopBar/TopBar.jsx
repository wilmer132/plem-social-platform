import React from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Menu,
  MenuItem
} from '@material-ui/core';
import './TopBar.css';

/*Import icons for toolbar design*/
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftMenu: null,
      rightMenu: null,
    };
  }

  render() {
    return (
      <AppBar position='absolute' style={this.props.style}>
        <Toolbar className="toolbar-plembar" style={{minHeight:'50px'}}>
          <div className="toolbar-group-left">
            <IconButton>
              <MenuIcon 
                onClick={(e) => this.setState({ leftMenu: e.currentTarget })}
                style={this.props.style} 
              />
            </IconButton>
            <Menu
              open={Boolean(this.state.leftMenu)}
              anchorEl={this.state.leftMenu} onClose={() => this.setState({ leftMenu: null })}
            >
              <MenuItem
                onClose={() => {this.setState({ leftMenu: null })}}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClose={() => {this.setState({ leftMenu: null })}}
              >
                Friend List
              </MenuItem>
              <MenuItem
                onClose={() => {this.setState({ leftMenu: null })}}
              >
                Settings
              </MenuItem>
            </Menu>
            <Typography variant='h5'>Plem</Typography>
          </div>
          <div className="toolbar-group-right">
            <SearchIcon/>
            <IconButton>
              <MoreVertIcon 
                onClick={(e) => this.setState({ rightMenu: e.currentTarget })}
                style={this.props.style} 
              />
            </IconButton>
            <Menu
              open={Boolean(this.state.rightMenu)}
              anchorEl={this.state.rightMenu} onClose={() => this.setState({ rightMenu: null })}
            >
              <MenuItem
                onClose={() => {this.setState({ rightMenu: null })}}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;