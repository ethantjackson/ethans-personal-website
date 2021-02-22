import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>

      <h1>Ethan Jackson</h1>
      <p>Developer, Creator, Innovator</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle='btn--outline'
          buttonSize='btn--large' buttonBehavior='btn--down'
        >
          SHOW ME MORE
        </Button>
        <Button className="btns" buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          LOOK AT THIS <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
