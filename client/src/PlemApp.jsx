import React from 'react';
import './PlemApp.css';
import axios from 'axios';

class PlemApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/test')
    .then((response) => {
      const backend_data = response.data.body;
      console.log(backend_data);
      this.setState({ response: backend_data });
    });
  }

  render() {
    return (
      <div>
        <h1>Hello from Frontend</h1>
        <h1>{this.state.response}</h1>
      </div>
    );
  }
}

export default PlemApp;
