import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams, useLocation, Redirect } from "react-router-dom";







const DemoRouter = () => {
    return (
      <div container='container'>
        <Router>
        <Welcome/>
        <switch>

       <Route exact path="/" component={Welcome}/>
       <Route exact path="/home" component={Home}/>
       <Route exact path="/person" component={Person}/>
       <Route exact path="/About Us" component={About}/>
       <Route  component={NotFound}/>
        </switch>
        </Router>        
      </div>
    );
  };
  



const Welcome = () => {
  return (
    <div>
      <p> Welcome Page </p>
    </div>
  );
};



const Header = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
       <div class="container-fluid">
    <a class="navbar-brand" href="#">React</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" 
    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">

      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         
          <Link className='nav-link' to="/" >Welcome</Link>

        </li>
        <li class="nav-item">
        <Link className='nav-link' to="/home" >Home</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to="/person" >Person</Link>
        </li>

        <li class="nav-item">
        <Link className='nav-link' to="/about" >About Us</Link>
        </li>
      </ul>
      <span class="navbar-text">
       <button> Sign Up    </button>
      </span>
    </div>
  </div>
      </nav>
    );
  };


  const About = () => {
    return (
      <div>
        <p> About Page </p>
      </div>
    );
  };

const Home = () => {
  return (
    <div>
      <p> Home Page </p>
    </div>
  );
};
const Person = () => {
  return (
    <div>
      <p> Person Page </p>
    </div>
  );
};

const NotFound = () => {
  return (
    <div>
      <p> Not found Page </p>
    </div>
  );
};
