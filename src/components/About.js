import React from 'react';
import '../css/About.css';

function About() {
  return (
    <section className='about-container' id='about'>
      <div className='divider-container'>
        <img src='/img/dots-cyan.png' alt='dots' />
      </div>
      <h1>About Me </h1>
      <div className='about'>

        <p className='about-text'>
          Welcome to my site! I am a Finance professional turned Software
          Engineer. While working in Finance, I found a passion in programming &
          problem solving which led me to enroll in the Grace Hopper Program at
          Fullstack Academy to become a Software Engineer. I am excited to use
          my creative web development and coding skills to build applications
          with great user experiences.
        </p>
      </div>
      <div className='divider-container'>
        <img src='/img/dots-cyan.png' alt='dots' />
      </div>
    </section>
  );
}

export default About;
