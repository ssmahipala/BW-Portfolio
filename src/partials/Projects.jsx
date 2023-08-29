import React from 'react'

function Projects({isActive}) {
  return (
    <div className={`section ${isActive ? "active" : ""}`} data-aos="zoom-in">
        <div className='project-section container'>
        <div className='project-div-1'>
        <h2>
            Here are My projects to showcase
        </h2>
        </div>
        <div className="project-div-2">
            {/* <img src={myself} alt="Image of Sumanth" width={300} height={400}/> */}
        </div>
    </div>  
    </div>
    )
}

export default Projects