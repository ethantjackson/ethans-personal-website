import React from 'react';
import '../../App.css';
import Profile2 from '../../images/profile2.jpg';
import UCLA from '../../images/ucla.jpg';

export default function AboutMe() {
  return (
    <div className='about-me-container'>
      <h1 className='about-me'>ABOUT ME</h1>
      <div className='img-container'>
        <img
          className='about-me-images'
          src={Profile2}
          alt='profile'
          height='400'
        ></img>
        <img
          className='about-me-images ucla-img'
          src={UCLA}
          alt='ucla'
          height='400'
        ></img>
      </div>
      <p className='about'>
        &nbsp;&nbsp;&nbsp;&nbsp; Hello, my name is Ethan Jackson, and I'm
        currently pursuing a degree in computer science at the University of
        California, Los Angeles. I have experience in MERN full-stack web
        development, C++ games and computer applications, and C embedded systems
        development for AVR microprocessors. Outside of coding, I enjoy making
        music and noodling around on trumpet, guitar, and piano. I am always
        looking for opportunities to learn and expand my skillsets!
      </p>
    </div>
  );
}
