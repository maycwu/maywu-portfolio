import React from 'react';
import '../css/Skills.css';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <section className='skills-container'>
      <h1 className='skills-title'>TECH & SKILLS</h1>
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
        <div>
          <div className='skills-img-container'>
            <img
              src='/img/icons/javascript.png'
              alt='JavaScript'
              title='JavaScript'
              className='skill-icon'
            />
            <img
              src='/img/icons/html.png'
              alt='HTML'
              title='HTML'
              className='skill-icon'
            />
            <img
              src='/img/icons/css.png'
              alt='CSS'
              title='CSS'
              className='skill-icon'
            />
            <img
              src='/img/icons/redux.png'
              alt='Redux'
              title='Redux'
              className='skill-icon'
            />
            <img
              src='/img/icons/react.png'
              alt='React'
              title='React'
              className='skill-icon'
            />
            <img
              src='/img/icons/postgresql.png'
              alt='PostgreSQL'
              title='PostgreSQL'
              className='skill-icon'
            />
            <img
              src='/img/icons/node.png'
              alt='Node.js'
              title='Node.js'
              className='skill-icon'
            />
            <img
              src='/img/icons/express.png'
              alt='Express.js'
              title='Express.js'
              className='skill-icon'
            />
          </div>
          {/* <h2 className='skills-subtitle'>Tools</h2> */}
          <div className='skills-img-container'>
            <img
              src='/img/icons/git.png'
              alt='Git'
              title='Git'
              className='skill-icon'
            />
            <img
              src='/img/icons/heroku.png'
              alt='Heroku'
              title='Heroku'
              className='skill-icon'
            />
            <img
              src='/img/icons/firebase.png'
              alt='Firebase'
              title='Firebase'
              className='skill-icon'
            />
          </div>

          {/* <h2 className='skills-subtitle'>UI Design</h2> */}
          <div className='skills-img-container'>
            <img
              src='/img/icons/figma.png'
              alt='Figma'
              title='Figma'
              className='skill-icon'
            />
            <img
              src='/img/icons/photoshop.png'
              alt='Photoshop'
              title='Photoshop'
              className='skill-icon'
            />
            <img
              src='/img/icons/bootstrap.png'
              alt='Bootstrap'
              title='Bootstrap'
              className='skill-icon'
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
