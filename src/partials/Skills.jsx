import React from "react";

function Skills({isActive}) {
  return (
    <div className={`section ${isActive ? "active" : ""}`} data-aos="zoom-in">
        <div className="skills-section container">
      <div className="skills-div-1">
        <h2>
          These are the Skills I'm proficient with
        </h2>
      </div>
      <div className="skills-div-2">
        {/* <img src={myself} alt="Image of Sumanth" width={300} height={400}/> */}
      </div>
    </div>
    </div>
  );
}

export default Skills;
