import React from 'react';
import '../css/Home.css';

function Home() {
  return (
    <section className='home-container'>
      <div className='home'>
      <div className='home-text'>Hi! <span> I’m May </span>
      <br/>Full Stack 
      <br/>Software Engineer
      <br/>
      <i class="bi bi-github"></i>
      <i class="bi bi-linkedin"></i>
      <i class="bi bi-file-earmark-person"></i>
      </div>
    
      <div className="home-image">
         <img src="/img/girl.png" alt="computer" className='computer-img-container'/>
      </div>
    </div>
        </section>
  );
}

export default Home;
