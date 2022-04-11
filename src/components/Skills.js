import React from 'react';
import '../css/Skills.css';

function Skills() {
  return (
    <section className='skills-container'>
      <h1 className='skills-title'>Technologies & Skills</h1>
      <div>
        <div className='skills-img-container'>
          <img
            src='/img/icons/javascript.png'
            alt='JavaScript'
            className='skill-icon'
          />
          <img src='/img/icons/html.png' alt='HTML' className='skill-icon' />
          <img src='/img/icons/css.png' alt='CSS' className='skill-icon' />
          <img src='/img/icons/redux.png' alt='Redux' className='skill-icon' />
          <img src='/img/icons/react.png' alt='React' className='skill-icon' />
          <img
            src='/img/icons/postgresql.png'
            alt='PostgreSQL'
            className='skill-icon'
          />
            <img src='/img/icons/node.png' alt='Node.js' className='skill-icon' />
  <img
    src='/img/icons/express.png'
    alt='Express.js'
    className='skill-icon'
  />

          {/* <span className="skills-name">HTML</span> */}
          {/* <span className="skills-name">CSS</span> */}
          {/* <span className="skills-name">Javascript</span> */}
          {/* <span className="skills-name">React</span> */}
          {/* <span className="skills-name">Redux</span> */}
          {/* <span className="skills-name">Express.js</span> */}
          {/* <span className="skills-name">Node.js</span> */}
          {/* <span className="skills-name">Axios</span> */}
          {/* <span className="skills-name">RESTful APIs</span> */}
          {/* <span className="skills-name">Git</span> */}
          {/* <span className="skills-name">Bootstrap</span> */}
          {/* <h2 className="skills-subtitle">Database</h2> */}
          {/* <span className="skills-name">PostgreSQL</span> */}
        </div>
        <h2 className='skills-subtitle'>Tools</h2>
        <div className='skills-img-container'>
          <img src='/img/icons/git.png' alt='Git' className='skill-icon' />
          <img
            src='/img/icons/heroku.png'
            alt='Heroku'
            className='skill-icon'
          />
          <img
            src='/img/icons/firebase.png'
            alt='Firebase'
            className='skill-icon'
          />
        </div>

        <h2 className='skills-subtitle'>UI Design</h2>
        <div className='skills-img-container'>
          <img src='/img/icons/figma.png' alt='Figma' className='skill-icon' />
          <img
            src='/img/icons/photoshop.png'
            alt='Photoshop'
            className='skill-icon'
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
