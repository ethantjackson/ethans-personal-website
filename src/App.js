import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import ContactMe from './components/pages/ContactMe';
import Projects from './components/pages/Projects';

// function smoothScroll(target,duration) {
//   var target = document.querySelector(target);
//   var targetPosition = target.getBoundingClientRectangle();
//   var startPosition = window.pageYOffset;
//   var distance = targetPosition - startPosition;
//   var startTime = null;
//   function animation(currentTime) {
//     if(startTime === null) startTime =currentTime;
//     var timeElapsed = currentTime - startTime;
//     var run = ease(timeElapsed, startPosition, distance, duration);
//     window.scrollTo(0,run);
//     if(timeElapsed < duration) requestAnimationFrame(animation);
//   }
//   function ease(t, b, c, d) {
//     t /= d/2;
//     if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
//     t--;
//     return -c/2 * (t*(t-2)-1) + b;
//   };
//   requestAnimationFrame(animation);
// }
  
// var upButton = document.querySelector('.btnScrollUp');
// upButton.addEventListener('click', function() {
//   smoothScroll('target', 1000);
// });
  

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component=
          {Home} />
          <Route path='/about-me' exact component=
          {AboutMe} />
          <Route path='/contact-me' exact component=
          {ContactMe} />
          <Route path='/projects' exact component=
          {Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
