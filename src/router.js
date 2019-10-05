import React from 'react';
import Home from './Home';
import './router.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ShowHome() {
  return <Home />;
}

function ShowApp() {
  return <App />;
}

export default function Routes() {
  return (
    <Router>
      <div className="Container">
        <div className="TopHeader">
          <nav>
            <ul id="NavbarLeft">
              <li id="NavItem"><Link to="/"><b>Home</b></Link></li>
              <li id="NavItem"><a href="#"><b>Locations</b></a></li>
              <li id="NavItem"><a href="#"><b>Customer Service</b></a></li>
            </ul>
            <ul id="NavbarRight">
              <li id="NavItem"><a href="#"><b>Personal</b></a></li>
              <li id="NavItem"><a href="#"><b>Small Business</b></a></li>
              <li id="NavItem"><a href="#"><b>Commercial</b></a></li>
              <li id="NavItem"><a href="#"><b>Wealth Management</b></a></li>
              <li id="College"><Link to="/college"><b>College Portal</b></Link></li>
              <li id="SignIn"><a href="#"><b>SIGN IN</b></a></li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/college">
            <App />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}