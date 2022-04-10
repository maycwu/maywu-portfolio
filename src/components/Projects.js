import React from 'react';
import '../css/Projects.css';
import { Container, Row, Col } from 'react-grid-system';

function Projects() {
  return (
    <section className='projects-container'>
      <div className='project-img-container'>
        <div className='project'>
          <img
            src='/img/git-status.png'
            alt='portfolio'
            className='project-img'
          />
        </div>
        <h2 className='project-title'>git status</h2>
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
        <h2 className='project-title'>reverie resort</h2>
        <div className='project-link'>
          <a
            href='https://reverie-resort.herokuapp.com/'
            className='project-link-name'
          >
            View details
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
