import React from "react";

import dyslogo from "../assets/company/DyslexiaLLC.png";
import insprex from "../assets/company/insprex.png";
import eclogo from "../assets/company/eNcloudLogo.png";

function Experience({ isActive }) {
  return (
    <>
      <div className={`section ${isActive ? "active" : ""}`} data-aos="zoom-in">
        <div className="experience-heading">
          <h3 className="headings-h3"> Experience </h3>
        </div>
        <section id="timeline">
          <div className="tl-item">
            <div className="tl-bg"></div>
            <div className="company-logo">
              <img src={eclogo} alt="eNcloud Logo" />
            </div>

            <div className="tl-year">
              <p className="f2">Mar 23 - Present</p>
            </div>

            <div className="tl-content">
              <h1>eNcloud Services</h1>
              <p>
                Developed and maintained full-stack applications with the MERN
                (MongoDB, Express.js, React.js, Node.js) stack. Implemented
                diverse features based on project needs, designed RESTful APIs
                for seamless communication, and ensured secure user
                authentication using JWT. Optimized performance through
                efficient database querying and caching. Deployed applications
                on AWS and Azure cloud platforms.{" "}
              </p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-bg"></div>
            <div className="company-logo">
              <img src={dyslogo} alt="dyslexia help logo" />
            </div>
            <div className="tl-year">
              <p className="f2">May 22 - Jul 22</p>
            </div>

            <div className="tl-content">
              <h1 className="f3 text--accent ttu">Dyslexia Help</h1>
              <p>
                Involved in the development of a Full Stack MERN application
                centered around Dyslexia testing and training. Emphasized
                data-driven decision-making, conducted successful trial runs of
                programs, optimized software for efficiency, and adeptly
                integrated business requirements into cohesive full-stack
                solutions.
              </p>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-bg"></div>
            <div className="company-logo">
              <img src={insprex} alt="insprex logo" />
            </div>
            <div className="tl-year">
              <p className="f2">Jan 21 - Jul 21</p>
            </div>

            <div className="tl-content">
              <h1 className="f3 text--accent ttu">Insprex Technologies</h1>
              <p>
                Contributed to the frontend UI/UX of a socio-political analysis
                app using React JS. Developed wireframes, custom components, and
                integrated new features. Translated user requirements into
                software design, adhering to agile methodology. Proficient in
                JIRA for tracking and GIT for version control. Wrote
                well-designed, testable code, and executed software component
                tests.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Experience;

//     <ul className="timeline">
//   {/* <!-- Item 1 --> */}
//   <li>
//     <div class="direction-r">
//       <div class="flag-wrapper">
//         <span class="flag">eNcloud Services</span>
//         <span class="time-wrapper"><span class="time">March 2023 - present</span></span>
//       </div>
//       <div class="desc">Software Engineer</div>
//     </div>
//   </li>

//  {/* Item 2  */}
//   <li>
//     <div class="direction-l">
//       <div class="flag-wrapper">
//         <span class="flag">Dyslexia Help</span>
//         <span class="time-wrapper"><span class="time">May 2022 - July 2022</span></span>
//       </div>
//       <div class="desc">MERN Stack Internship</div>
//     </div>
//   </li>

//   {/* <!-- Item 3 --> */}
//   <li>
//     <div class="direction-r">
//       <div class="flag-wrapper">
//         <span class="flag">Insprex Technologies</span>
//         <span class="time-wrapper"><span class="time">January 2021 - July 2021</span></span>
//       </div>
//       <div class="desc">Junior Software Developer</div>
//     </div>
//   </li>

// </ul>
