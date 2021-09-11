import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import ContactMe from './components/pages/ContactMe';
import Projects from './components/pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-me' exact component={AboutMe} />
          <Route path='/contact-me' exact component={ContactMe} />
          <Route path='/projects' exact component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
