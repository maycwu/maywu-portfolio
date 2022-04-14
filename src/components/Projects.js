import React from 'react';
import '../css/Projects.css';
// import { motion } from 'framer-motion';

function Projects() {
  return (
    <section className='projects-container' id='projects'>
      {/* <img src='/img/dots-cyan.png' alt='dots' /> */}
      <h1 className='project-title'>PROJECTS</h1>
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
      <div className='projects'>
        <div className='project-img-container'>
          <div className='project'>
            <img
              src='/img/git-status.png'
              alt='portfolio'
              className='project-img'
            />
          </div>
          <h2 className='project-subtitle'>git status</h2>
          <div className='project-text-container'>
          <p><span>Tech stack:</span> JavaScript, HTML, CSS, React, Chart.js, GitHub API, Firebase, Bootstrap</p>
          </div>
          <div className='project-link'>
            <a
              href='http://my-git-status.herokuapp.com/'
              className='project-link-name'
            >
              View details
            </a>
          </div>
        </div>

        <div className='project-img-container'>
          <div className='project'>
            <img
              src='/img/reverie.png'
              alt='portfolio'
              className='project-img'
            />
          </div>
          <h2 className='project-subtitle'>reverie resort</h2>
          <div className='project-text-container'>
          <p><span>Tech stack:</span> JavaScript, HTML, CSS, React, Redux, Express.js, Sequelize, PostgreSQL</p>
          </div>
          <div className='project-link'>
            <a
              href='https://reverie-resort.herokuapp.com/'
              className='project-link-name'
            >
              View details
            </a>
          </div>
        </div>

        <div className='project-img-container'>
          <div className='project'>
            <img
              src='/img/spotify.png'
              alt='portfolio'
              className='project-img'
            />
          </div>
          <h2 className='project-subtitle'>spotify memory song game</h2>
          <div className='project-text-container'>
          <p><span>Tech stack:</span> JavaScript, HTML, CSS, React, Spotify API authentication & data fetch</p>
          </div>
          <div className='project-link'>
            <a
              href='https://github.com/maycwu/memory-song-game/'
              className='project-link-name'
            >
              View details
            </a>
          </div>
        </div>
      </div>
          {/* </motion.div> */}
    </section>
  );
}

export default Projects;
