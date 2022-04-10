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
          <li>home</li>
          <li>about</li>
          <li>portfolio</li>
          <li>contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
