import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "../components/AppBar/AppBar";
import Drawer from "../components/Drawer/Drawer";
import Card from "../components/Card/Card";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {/* The rest of your application */}
        <MuiThemeProvider theme={theme}>
          <AppBar />
          <Drawer />
          <main>
            <Grid container spacing={40}>
              <Grid item>
                <Card />
              </Grid>
              <Grid item>
                <Card />
              </Grid>
              <Grid item>
                <Card />
              </Grid>
            </Grid>
          </main>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
