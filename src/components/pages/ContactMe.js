import React from 'react';
import '../../App.css';

export default function ContactMe() {
  return (
    <div className='contact-me-container'>
      <h1 className='contact-me'>CONTACT ME</h1>
      <h3 className='contact'> You can find me at: </h3>
      <p className='contact-email'> ethantjackson44@gmail.com</p>
      <div className='social-icons'>
        <a href='https://github.com/ethantjackson'>
          <i className='social-icon fab fa-github'></i>
        </a>
        <a href='https://www.linkedin.com/in/ethan-jackson-03b37b195'>
          <i className='social-icon fab fa-linkedin'></i>
        </a>
        <a href='https://www.youtube.com/channel/UCPEibCcRHg_tlvoBXSRiBxg'>
          <i className='social-icon fab fa-youtube'></i>
        </a>
      </div>
    </div>
  );
}
