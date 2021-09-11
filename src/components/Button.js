import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

const BEHAVIORS = ['btn--stay', 'btn--down'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonBehavior,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonBehavior = BEHAVIORS.includes(buttonBehavior)
    ? buttonBehavior
    : BEHAVIORS[0];

  if (checkButtonStyle === 'btn--outline' && checkButtonSize == 'btn--large') {
    return (
      <Link to='/projects' className='btn-mobile'>
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonBehavior}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </Link>
    );
  } else if (
    checkButtonStyle === 'btn--outline' &&
    checkButtonSize == 'btn--medium'
  ) {
    return (
      <Link to='/contact-me' className='btn-mobile'>
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonBehavior}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </Link>
    );
  } else
    return (
      <a
        target='_blank'
        rel='noreferrer'
        href='https://www.youtube.com/channel/UCPEibCcRHg_tlvoBXSRiBxg'
      >
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonBehavior}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </a>
    );
};
