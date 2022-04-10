import React from 'react';
import '../css/Home.css';

function Home() {
  return (
    <section className='home-container'>
      <div className='home'>
      <div className='home-text'>
      <h4>Hi! <span> I’m May </span> & 
      <br/>I'm a Full Stack 
      <br/> Software Engineer
      <br/>
      <i class="bi bi-github"></i>
 <i class="bi bi-linkedin"></i>
 <i class="bi bi-file-earmark-person"></i>
      </h4>
     
     
     
      </div>
    
      <div className="home-image">
         <img src="/img/girl.png" alt="computer" className='computer-img-container'/>
      </div>
    </div>
        </section>
  );
}

export default Home;
