import { useState, useEffect } from 'react'
import './App.css'

import {Routes, Route} from 'react-router-dom'

import Header from './partials/Header'
import Navigation from './partials/Navigation'
import Hero from './partials/Hero'
import About from './partials/About'
import Experience from './partials/Experience'
import Skills from './partials/Skills'
import Contact from './partials/Contact'
import Projects from './partials/Projects'

import 'aos/dist/aos.css'; // Import the AOS stylesheet
import AOS from 'aos';

import FOG from 'vanta/src/vanta.fog'

function App() {

  const [activeSection, setActiveSection] = useState('1');

  useEffect(() => {
    AOS.init();
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sectionHeight = window.innerHeight;
      
      if (scrollTop < sectionHeight * 0) {
        setActiveSection(1);
      }
      if (scrollTop < sectionHeight * 1) {
        setActiveSection(2);
      }
      if (scrollTop < sectionHeight * 2) {
        setActiveSection(3);
      }
      if (scrollTop < sectionHeight * 3) {
        setActiveSection(4);
      }
      if (scrollTop < sectionHeight * 4) {
        setActiveSection(5);
      }
      if (scrollTop < sectionHeight * 5) {
        setActiveSection(6);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   VANTA.FOG({
  //     el: "#vanta",
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.00,
  //     minWidth: 200.00,
  //     highlightColor: 0x0,
  //     midtoneColor: 0x8ea2,
  //     lowlightColor: 0xfcfcfc,
  //     baseColor: 0x0,
  //     blurFactor: 0.8,
  //     speed: 2.0,
  //     zoom: 0.40
  //   })
  // }, [])
  return (
    <>
    <div id='vanta' className='bg'>
    
      <Header />
      <Navigation/>
      <div className='app-container'>
      <div id='hero' >
      <Hero isActive={activeSection === 1}/>
      </div>
      <div id="about" >
      <About isActive={activeSection === 2}/>
      </div>
      <div id="experience" >
      <Experience isActive={activeSection === 3}/>
      </div>
      <div id="skills" >
      <Skills isActive={activeSection === 4}/>
      </div>
      <div id='project' >
      <Projects isActive={activeSection === 5}/>
      </div>
      <div id="contact" >
      <Contact isActive={activeSection === 6} />
      </div>
      </div>
    </div>
    </>
  )
}

export default App
