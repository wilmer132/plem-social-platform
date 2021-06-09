import React from 'react';
import './PlemApp.css';
import {HashRouter} from 'react-router-dom';
import {Grid, Paper} from '@material-ui/core';
import axios from 'axios';

/*Import custom components*/
import TopBar from '../TopBar/TopBar';
import UserList from '../UserList/UserList';

const plemStyle = {
  background: '#480ca8',
  color: 'white'
};

class PlemApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <HashRouter>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <TopBar style={plemStyle}/>
          </Grid>
          <Grid item sm={3}>
            <Paper>
              <UserList/>
            </Paper>
          </Grid>
        </Grid>
      </HashRouter>
    );
  }
}

export default PlemApp;
