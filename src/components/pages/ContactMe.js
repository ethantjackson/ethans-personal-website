import React from 'react';
import '../../App.css';

export default function ContactMe() {
  return (
    <div>
      <h1 className='contact-me'>CONTACT ME</h1>
      <h1 className='contact'> You can find me at: </h1>
      <div className='social-icons'>
        <h1> ethantjackson44@gmail.com</h1>
        <a href='https://github.com/ethantjackson'>
          <h1> Github(ethantjackson)</h1>
        </a>
        <a href='https://www.linkedin.com/in/ethan-jackson-03b37b195'>
          <h1> LinkedIn</h1>
        </a>
        <a href='https://www.youtube.com/channel/UCPEibCcRHg_tlvoBXSRiBxg'>
          <h1> Youtube</h1>
        </a>
      </div>
    </div>
  );
}
