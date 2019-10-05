import React from 'react';
import './App.css';
import logo from './logo.png';
import { TextField, Card, CardContent, Button, withStyles, makeStyles } from '@material-ui/core';

const schools = [
  {
    value: 'Arizona State University',
    label: 'ASU',
  },
  {
    value: 'University of California, Berkeley',
    label: 'UC Berkeley',
  },
  {
    value: 'University of Colorado, Boulder',
    label: 'CU Boulder',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

const ColorButton = withStyles(theme => ({
  root: {
    color: '#058659',
    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#058659',
    },
  },
}))(Button);

const ColorButton2 = withStyles(theme => ({
  root: {
    color: '#058659',
    backgroundColor: '#ffffff',
    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#4c5854',
    },
  },
}))(Button);

const ColorField = withStyles(theme => ({
  root: {
    color: '#058659',
    backgroundColor: '#ffffff',
    '&:hover': {
      color: '#ffffff',
      // backgroundColor: '#4c5854',
    },
    '& .MuiFilled-underline:after': {
      borderBottomColor: '#058659',
    },
    '& .MuiFilledInput-root': {
      '& fieldset': {
        borderColor: '#058659',
      },
      '&:hover fieldset': {
        borderColor: '#058659',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#058659',
      },
    },
  },
}))(TextField);

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(25),
  },
  input: {
    display: 'none',
  },
  signup: {
    margin: theme.spacing(15),
    width: '40vh'
  },
  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    width: '40vh',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={logo} 
          className="App-logo" 
          alt="logo" 
        />
      </header>
      <div id="contain">
        <p className="Title">Banking on Education:</p>
        <p className="Title3">The College Program</p>
      </div>
      <div className="Sign">
        <div className="Fields">
          <ColorField
            id="filled-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="filled"
            placeholder="studentname@college.edu"
          />
          <ColorField
            id="filled-select-native"
            select
            label="Select College"
            className={classes.textField}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu,
              },
            }}
            // helperText="Please select your school"
            margin="normal"
            variant="filled"
          >
            {schools.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </ColorField>
        </div>
        <ColorButton2
          variant="outlined"
          size="large"
          className={classes.signup}
        >
          Sign Up
        </ColorButton2>
      </div>
      <body className="Body">
        <div className="Info">
          <div className="Card-wrapper">
            <Card>
              <CardContent>
                <p className="Title2">Good Grades Reward Program</p>
                <p className="Text">Students currently enrolled at <b>any accredited US College or University</b> who earn a Grade Point Average of 3.0 or higher during a school year (typically September- August) may apply for a <b>$10 Credit</b> in your checking account!</p>
                <input
                  accept=".pdf"
                  className={classes.input}
                  id="outlined-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="outlined-button-file">
                  <ColorButton
                    variant="outlined"
                    component="span"
                    size="large"
                    classname={classes.button}
                  >
                    Upload Transcript
                  </ColorButton>
                </label>
              </CardContent>
            </Card>
          </div>
          
          <div className="Card-wrapper">
            <Card>
              <CardContent>
                <p className="Title2">Financial Literacy Course</p>
                <p className="Text">Learn what it takes to become financially literate, why this set of knowledge and skills are so critical, and how it can impact your retirement. Our detailed program consists of lesson plans, videos, and quizzes designed to give college students the proper financial basics they need.</p>
                <p className="Text">For completing each course, you will receive up to a $20 match on your next deposit!</p>
                <ColorButton
                  variant="outlined"
                  size="large"
                  classname={classes.button}
                >
                  <a id="modules" target="_blank" href="https://www.figma.com/file/Ujg7sfaMWBybSkfSfK3Xf9/Finance-Course">Open Course Modules</a>
                </ColorButton>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* <p>
          Test2
        </p>
        <p>
          Test3
        </p>
        <div>
          hello
        </div> */}
      </body>
    </div>
  );
}

export default App;
