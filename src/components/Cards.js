import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import profile from '../images/profile.jpg'
import BrickEater from '../images/BrickEater.png'
import Pong from '../images/PONG.png'
import Calc from '../images/CALC.png'
import Timer from '../images/Timer.png'

function Cards() {
  return (
    <div className='cards'>
      <h1>Hello!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={profile}
              text="I'm Ethan Jackson, a Computer Science student at the University of California, Riverside."
              label='More About Me'
              path='/about-me'
            />
            <CardItem
              src={BrickEater}
              text='Brick Eater'
              label='SFML/C++'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Pong}
              text='Pong'
              label='SFML/C++'
              path='/projects'
            />
            <CardItem
              src={Calc}
              text='Calculator'
              label='QT/C++'
              path='/projects'
            />
            <CardItem
              src={Timer}
              text='Timer'
              label='QT/C++'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;