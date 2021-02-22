import React from 'react';
import './ProjectCards.css';
import ExternalCardItem from './ExternalCardItem';
import BrickEater from '../images/BrickEater.png'
import Pong from '../images/PONG.png'
import Calc from '../images/CALC.png'
import Timer from '../images/Timer.png'
import HTM from '../images/HumanTaskManager.png'

function ProjectCards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ExternalCardItem
              src={BrickEater}
              text='Brick Eater: an SFML game with original art and sound design'
              label='SFML/C++'
              path='https://github.com/ethantjackson/Brick_Eater'
            />
            <ExternalCardItem
              src={Pong}
              text='Pong: single and two-player pong recreated in SFML'
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
              src={HTM}
              text='Human Task Manager: to-do list app created using Composite design patterns'
              label='C++'
              path='https://github.com/ethantjackson/Human_Task_Manager'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;