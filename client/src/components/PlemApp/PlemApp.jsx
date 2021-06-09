import React from 'react';
import './PlemApp.css';
import {HashRouter} from 'react-router-dom';
import axios from 'axios';

/*Import custom components*/
import TopBar from '../TopBar/TopBar';

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
        <div>
          <TopBar />
        </div>
      </HashRouter>
    );
  }
}

export default PlemApp;
