import React from 'react';
import './Home.css';
import 'typeface-roboto';
import logo from './logo.png';
import study from './study.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withStyles, makeStyles, Button } from '@material-ui/core';

const ColorButton = withStyles(theme => ({
  root: {
    color: '#058659',
    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#058659',
    },
  },
}))(Button);

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(10),
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className="Root">
      <header className="Header">
        <img 
          src={logo} 
          className="App-logo" 
          alt="logo" 
        />
      </header>
      <div className="Body1">
        <div className="Inner">
          <p id="pg">College Students, have good grades?<br/>Want to learn about your finances?<br/><b>Get paid for both now!</b></p>
          <ColorButton
            variant="outlined"
            color="primary"
            size="small"
            className={classes.button}
          >
            Learn More
          </ColorButton>
        </div>
        <img
          src={study}
          className="Study"
          alt="study"
        />
      </div>
    </div>
  );
}

export default Home;
