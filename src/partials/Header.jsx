import React from 'react'

import logo from '../assets/logo.svg'

function Header({activeSection}) {
  
  return (
    <div id='header' className='header'>
        <a href='#header' className='logo-a-tag'>
            <img src={logo} alt="Logo" className='logo-header' />
        </a>
    </div>
  )
}

export default Header