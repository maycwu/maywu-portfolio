import React from 'react';
import '../css/Projects.css';

function Projects() {
  return (
    <section className='projects-container'>
      <img src='/img/dots-cyan.png' alt='dots' />
      <h1 className='project-title'>Projects</h1>
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
          <h2 className='project-subtitle'>memory song game</h2>
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
    </section>
  );
}

export default Projects;
