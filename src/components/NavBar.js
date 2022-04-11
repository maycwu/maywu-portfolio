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
          <li><a href="#home">home</a> </li>
          <li><a href="#about">about</a> </li>
          <li><a href="#projects">projects</a> </li>
          <li><a href="#contact">contact</a> </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
