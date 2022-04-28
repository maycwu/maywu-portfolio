import React from 'react';
import '../css/About.css';
import '../css/index.css';
// import { motion } from 'framer-motion';

function About() {
  return (
    <section className='about-container' id='about'>
      <div className='divider-container'>
        {/* <img src='/img/dots-cyan.png' alt='dots' /> */}
      </div>
      {/* <h1 className='title-style'>ABOUT ME </h1> */}
      <br/>
      <br/>
      <br/>
      {/* <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      > */}
        <div className='about'>
          <p className='about-text'>
          <img src='/img/profile-circle.png' alt='profile' className='profile-img' />
            I am a Finance professional turned Software
            Engineer. While working in Finance, I found a <span><strong>passion in programming </strong></span>  
            and problem solving which led me to enroll in the Grace Hopper Program
            at Fullstack Academy to become a <span><strong>Software Engineer.</strong></span> I am excited to
            use my creative web development and skills to build
            applications with great user experiences.
            <br/>
            <br/>
            My interests are front-end web design & development but I'm also interested
            in full stack development. Feel free to contact me via email/LinkedIn for any questions/opportunities or 
            for a quick chat! 
            <br/>
            <br/>
            During my free time, I like to hike, exercise, draw and code fun projects!
            <br />
            <br />
            <div className="social-icons">
            <a href='https://github.com/maycwu' title='GitHub'>
              <i className='bi bi-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/maywu95/' title='LinkedIn'>
              <i className='bi bi-linkedin'></i>
            </a>
            </div>
          </p>
        </div>
      {/* </motion.div> */}
      <div className='divider-container'>
        {/* <img src='/img/dots-cyan.png' alt='dots' /> */}
      </div>
      <br/>
      <br/>
    </section>
  );
}

export default About;
