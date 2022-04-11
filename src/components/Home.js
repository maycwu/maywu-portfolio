import React from 'react';
import '../css/Home.css';

function Home() {
  return (
    <section className='home-container'>
      <img src='/img/shapes3.png' alt='shapes' className='accessory1' />
      <img src='/img/orange-dots2.png' alt='shapes' className='accessory2' />
      <img src='/img/orange-dots.png' alt='shapes' className='accessory3' />

      <div className='home'>
        <div className='home-text'>
          <h4>
            Hi! <span> I’m May </span> &
            <br />
            I'm a Full Stack
            <br /> Software Engineer
            <br />
            <a href='https://github.com/maycwu' title='GitHub'>
              {' '}
              <i class='bi bi-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/maywu95/' title='LinkedIn'>
              <i class='bi bi-linkedin'></i>
            </a>
            <a
              href='resume/resume.pdf'
              download='resume.pdf'
              title='Download Resume'
            >
              <i class='bi bi-file-earmark-person'></i>
            </a>
          </h4>
        </div>

        <div className='home-image'>
          <img src='/img/girl.png' alt='computer' className='computer-img' />
        </div>
      </div>
    </section>
  );
}

export default Home;
