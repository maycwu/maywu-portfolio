import React from 'react';
import '../css/Home.css';
import Particle from './Particle';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section className='home-container' id='home'>
      <Particle />
        <div className='home-sub-container'>
          <div className='home'>
            <div className='home-text'>
              {/* Hi there! <span> Im May </span>
              <br />
              Full Stack
              <br />
              Software Engineer */}
              <p><span>HEY THERE,</span></p>
              <h2>I'M MAY</h2>
              <p> SOFTWARE ENGINEER | WEB DEVELOPER |&#128205; based in NYC</p>
            </div>
          </div>
        </div>
      <motion.div
        initial='visible'
        whileInView='hidden'
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <div className='learn-more-container'>
          <div className='learn-more'>
            <div className='learn-more-text'>
              EXPLORE NOW
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
