import React from 'react';
import '../css/NavBar.css';

function NavBar() {
  return (
    <nav className='navbar-container'>
      <div className='navbar-inner-container'>
        <div className='navbar-sitename'>
          May W.
        </div>

        <ul className='navbar-ul'>
          <li><a href="#home" className='nav-link'>home</a> </li>
          <li><a href="#about" className='nav-link'>about</a> </li>
          <li><a href="#projects" className='nav-link'>projects</a> </li>
          <li><a href="#contact" className='nav-link'>contact</a> </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
