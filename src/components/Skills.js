import React from 'react';
import '../css/Skills.css';

function Skills() {
  return (
    <section className='skills-container'>
       <h1 className="skills-title">Skills</h1>
 <div>
     <div>
         <h2 className="skills-subtitle">Development</h2>
         <span className="skills-name">HTML</span>
         <span className="skills-name">CSS</span>
         <span className="skills-name">Javascript</span>
         <span className="skills-name">React</span>
         <span className="skills-name">Redux</span>
         <span className="skills-name">Express.js</span>
         <span className="skills-name">Node.js</span>
         <span className="skills-name">Bootstrap</span>
         <h2 className="skills-subtitle">Database</h2>
         <span className="skills-name">PostgreSQL</span>

     </div>
     <div>
         <h2 className="skills-subtitle">Tools</h2>
         <span className="skills-name">Git</span>
         <span className="skills-name">Heroku</span>
         <span className="skills-name">Firebase</span>
         <span className="skills-name">Chart.js</span>
        
         <h2 className="skills-subtitle">Design</h2>
         <span className="skills-name">Figma</span>
         <span className="skills-name">Adobe XD</span>
         <span className="skills-name">Photoshop</span>
     </div>
 </div>
    </section>
  );
}

export default Skills;
