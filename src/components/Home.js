import React from 'react';
import '../css/Home.css';

function Home() {
  return (
    <section className='home-container' id='home'>
      <img src='/img/shapes3.png' alt='shapes' className='accessory1' />
      <img src='/img/orange-dots2.png' alt='shapes' className='accessory2' />
      <img src='/img/orange-dots.png' alt='shapes' className='accessory3' />

      <div className='home'>
        <div className='home-text'>
          <div>
            Hi! <span> I’m May </span>
            <br />
            Full Stack
            <br />
            Software Engineer
          </div>
        </div>

        <div className='home-image'>
          <img src='/img/girl.png' alt='computer' className='computer-img' />
        </div>
      </div>
    </section>
  );
}

export default Home;
