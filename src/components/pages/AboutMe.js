import React from 'react';
import '../../App.css';
import Profile from '../../images/profile.jpg'
import Ucr from '../../images/ucr.jpg'

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <h1 className='about-me'>ABOUT ME</h1>
      <div className="img-container">
        <div class="about-me-images"><img className="about-me-images" src={Profile} alt="profile" height="400"></img></div>
        <div class="about-me-images"><img className="about-me-images" src={Ucr} alt="ucr" height="400"></img></div>
      </div>
      <p className='about'>
        &nbsp;&nbsp;&nbsp;&nbsp; Hello, my name is Ethan Jackson, and I'm an aspiring software engineer at the University of California, Riverside. My areas of study primarily lie in C++, but I have also ventured into Java and Javascript, utilizing redux and react (which I used to make this website!). Regarding C++, I have utilized graphics libraries including SFML and QT to create several games and applications. Outside of coding, I enjoy making music, and I play trumpet in several classical and jazz ensembles. I am always looking for opportunities to learn and expand my skillsets!
      </p>
    </div>
  );
}