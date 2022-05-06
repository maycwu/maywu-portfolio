import React from 'react';
import '../css/NavBar.css';

function NavBar() {
  return (
    <nav className='navbar-container'>
      <div className='navbar-inner-container'>
        <div className='navbar-sitename'>
        {/* <a href="#home" >{`May C. Wu`} </a>  */}
        </div>

        <ul className='navbar-ul'>
          <li><a href="#home" className='nav-link'>HOME</a> </li>
          <li><a href="#about" className='nav-link'>ABOUT</a> </li>
          <li><a href="#projects" className='nav-link'>PROJECTS</a> </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
