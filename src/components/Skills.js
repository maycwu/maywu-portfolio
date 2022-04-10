import React from 'react';
import '../css/Skills.css';

function Skills() {
  return (
    <section className='skills-container'>
      <div className='skills-title'>
        <h2>Skills</h2>
      </div>
      <div className='skills-list'>
        <h3>Development</h3>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>Bootstrap</li>
          <li>Redux</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
