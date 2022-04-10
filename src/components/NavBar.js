import React from 'react';
import '../css/NavBar.css';

function NavBar() {
  return (
    <nav className='navbar-container'>
      <div className='navbar-inner-container'>
        <div className='navbar-sitename'>
          <a>May Wu</a>
        </div>

        <ul className='navbar-ul'>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
