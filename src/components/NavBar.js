import React from 'react';
import '../css/NavBar.css';

function NavBar() {
  return (
    <nav className='navbar-container'>
      <div className='navbar-inner-container'>
        <div className='navbar-sitename'>
          <a>May W.</a>
        </div>

        <ul className='navbar-ul'>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PORTFOLIO</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
