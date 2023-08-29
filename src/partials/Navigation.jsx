import React from 'react';

function Navigation() {
  return (
    <nav className='navigation bottom'>
      <ul className="nav-list">
        <li>
          <a href="#about" className="nav-links neonText">
            About Me
          </a>
        </li>
        <li>
          <a href="#experience" className="nav-links neonText">
            Experience
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-links neonText">
            Skills
          </a>
        </li>
        <li>
          <a href="#project" className="nav-links neonText">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-links neonText">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

//     <nav className={`navigation ${activeSection === 'hero' ? 'bottom' : 'top-right'}`}>
