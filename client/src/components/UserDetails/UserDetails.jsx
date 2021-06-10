import React from 'react';
import {Typography} from '@material-ui/core';
import './UserDetails.css';

/**/


class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Typography>
          Welcome!
        </Typography>
        <div>
          <Typography>Sign in</Typography>
          <form>
            <Typography>Username</Typography>
            <input type='text'/>
            <Typography>Password</Typography>
            <input type='password'/><br/>
            <input type='submit' value='Sign in'/>
          </form>
        </div>
      </div>
    );
  }
}

export default UserDetails;