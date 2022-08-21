import React from 'react';
import self from '../../images/selfport.jpg'

export default function About() {
  return (
      <div>
      <h1 className="topText">About Me</h1>
      <div className="aboutText">
      <h2>
        Hello there,
      </h2>
      <h2>
        My name is Steffan Carter.
      </h2>
      <p>I am building the life of my dreams from the ground up.</p>
      <img src={self} alt="Me" width="190" height="250" className="selfy" />
      <p className="picSide">
      I'm studying web development at Penn State because I am a lifelong computer enthusiast in pursuit of a career I can be passionate about. Coding is an enjoyable way to express my creativity. Outside of my interest in computer, I am a husband and a father to two boys and in my off time I enjoy hikes with my dog and expanding my tarantula collection.
      </p>
      </div>
    </div>
  );
}