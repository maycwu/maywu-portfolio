import React from 'react';
import '../css/About.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className='about-container' id='about'>
      <div className='divider-container'>
        <img src='/img/dots-cyan.png' alt='dots' />
      </div>
      <h1>About Me </h1>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <div className='about'>
          <p className='about-text'>
            Welcome to my site! I am a Finance professional turned Software
            Engineer. While working in Finance, I found a passion in programming
            & problem solving which led me to enroll in the Grace Hopper Program
            at Fullstack Academy to become a Software Engineer. I am excited to
            use my creative web development and coding skills to build
            applications with great user experiences.
            <br />
            <br />
            <a href='https://github.com/maycwu' title='GitHub'>
              <i class='bi bi-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/maywu95/' title='LinkedIn'>
              <i class='bi bi-linkedin'></i>
            </a>
          </p>
        </div>
      </motion.div>
      <div className='divider-container'>
        <img src='/img/dots-cyan.png' alt='dots' />
      </div>
    </section>
  );
}

export default About;
