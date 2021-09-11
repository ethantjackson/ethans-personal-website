import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import ExternalCardItem from './ExternalCardItem';
import profile from '../images/profile.jpg';
import BrickEater from '../images/BrickEater.png';
import HTM from '../images/HumanTaskManager.png';
import StackerGame from '../images/StackerGame.png';
import WorkoutBuilder from '../images/WorkoutBuilder.png';

function Cards() {
  return (
    <div className='cards'>
      <h1>Hello!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={profile}
              text="I'm Ethan Jackson, a computer science student at UCLA."
              label='More About Me'
              path='/about-me'
            />
            <ExternalCardItem
              src={WorkoutBuilder}
              text='Workout Builder'
              label='MERN'
              path='https://github.com/ethantjackson/workout-website'
            />
          </ul>
          <ul className='cards__items'>
            <ExternalCardItem
              src={StackerGame}
              text='Stacker Game'
              label='C embedded'
              path='https://github.com/ethantjackson/CS120B_Final'
            />
            <ExternalCardItem
              src={BrickEater}
              text='Brick Eater'
              label='SFML/C++'
              path='https://github.com/ethantjackson/Brick_Eater'
            />
            <ExternalCardItem
              src={HTM}
              text='Human Task Manager'
              label='C++'
              path='https://github.com/ethantjackson/human-task-manager'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
