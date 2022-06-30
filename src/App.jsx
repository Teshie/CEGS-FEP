import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
// , Router
import "./App.css";
import  login  from "./components/login";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  // <Router>
      //       </Router>


  return (
      

            <div>


      <Navigation />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Features data={landingPageData.Features} /> 
      <Contact data={landingPageData.Contact} />
      <NavLink exact activeClassName="active"to="/Hello"/>
    </div>

  );
};

export default App;
