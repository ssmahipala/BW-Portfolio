import React from "react";

import myself from "../assets/myself.png";

function About({isActive}) {
  return (
    <div className={`section ${isActive ? "active" : ""}`} data-aos="zoom-in">
      <div className="about-section">
        <div className="about-div-1">
          <div className="sub-about-div-1">
          <h3 className="headings-h3"> About Me</h3>
          <p>
            I am a skilled software developer proficient in developing web applications,<br /> 
            with experience in creating full-stack applications using MERN stack. <br/> 
            My knowledge extends to tools such as Docker, Azure cloud, Azure DevOps Kubernetes, Terraform, and Jenkins. 
            <br/> I have a talent for analyzing user requirements and crafting full-stack solutions, 
            <br/> and I value collaboration with clients to create effective, scalable, and user-friendly solutions that tackle real-world problems.
            <br /> I'm eager to work with you and bring your ideas to fruition!
          </p>
          </div>
        </div>
        <div className="about-div-2">
          <img src={myself} alt="Image of Sumanth" width={300} height={400} />
        </div>
      </div>
    </div>
  );
}

export default About;
