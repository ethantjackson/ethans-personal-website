import React from 'react';
import './ProjectCards.css';
import ExternalCardItem from './ExternalCardItem';
import BrickEater from '../images/BrickEater.png';
import Pong from '../images/PONG.png';
import Calc from '../images/CALC.png';
import Timer from '../images/Timer.png';
import HTM from '../images/HumanTaskManager.png';
import StackerGame from '../images/StackerGame.png';
import WorkoutBuilder from '../images/WorkoutBuilder.png';

function ProjectCards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ExternalCardItem
              src={WorkoutBuilder}
              text='Workout Builder: Full-stack MERN app, including Google Oauth and an original workout API.'
              label='MERN'
              path='https://github.com/ethantjackson/workout-website'
            />
            <ExternalCardItem
              src={StackerGame}
              text='Stacker Game: Stacking game implementing an FSM and PWM audio on an AVR microprocessor.'
              label='C embedded'
              path='https://github.com/ethantjackson/CS120B_Final'
            />
            <ExternalCardItem
              src={HTM}
              text='Human Task Manager: to-do list app created using Composite and Factory design patterns'
              label='C++'
              path='https://github.com/ethantjackson/Human_Task_Manager'
            />
          </ul>
          <ul className='cards__items'>
            <ExternalCardItem
              src={Pong}
              text='Pong: single and two-player pong recreated with SFML'
              label='SFML/C++'
              path='https://github.com/ethantjackson/Pong'
            />
            <ExternalCardItem
              src={Calc}
              text='Calculator: GUI calculator application created using QT'
              label='QT/C++'
              path='https://github.com/ethantjackson/Calculator'
            />
            <ExternalCardItem
              src={Timer}
              text='Timer: GUI timer application created using QT'
              label='QT/C++'
              path='https://github.com/ethantjackson/Timer'
            />
            <ExternalCardItem
              src={BrickEater}
              text='Brick Eater: an SFML game with original art and sound design'
              label='SFML/C++'
              path='https://github.com/ethantjackson/Brick_Eater'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
