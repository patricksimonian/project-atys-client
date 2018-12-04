import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../components/AppBar/AppBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {/* The rest of your application */}
        <AppBar />
      </React.Fragment>
    );
  }
}

export default App;
