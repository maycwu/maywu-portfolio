import React from 'react';
import '../css/Home.css';
import Particle from './Particle';


function Home() {
  return (
    <section className='home-container' id='home'>
    <Particle/>
      <div className="home-sub-container">
      <div className='home'>
      <div className='home-text'>
            Hi there! <span> Im May </span>
            <br />
            Full Stack
            <br />
            Software Engineer
          </div>
      </div> 

      </div>
    </section>
  );
}

export default Home;
