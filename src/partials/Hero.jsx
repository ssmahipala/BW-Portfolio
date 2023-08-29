import React from 'react'

import heroimg from '../assets/heroimage.png'

function Hero({isActive}) {
  return (
    <div className={`section ${isActive ? "active" : ""}`} data-aos="zoom-in">
        <div className='hero-section container'>
        <div className='hero-img'>
            <a href='/'><img src={heroimg} alt="Cute Cow Boy" width={350} height={350}/></a>
        </div>
        <div className='hero-text'>
            <h1>Hi! Welcome to My Portfolio</h1>
        </div>
    </div>
    </div>
  )
}

export default Hero

{/* <div className='hero-navigation'>
</div> */}