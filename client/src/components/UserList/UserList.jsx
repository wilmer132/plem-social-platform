import React from 'react';
import {Typography} from '@material-ui/core';
import './UserList.css';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Typography>User List</Typography>
    );
  }
}

export default UserList;