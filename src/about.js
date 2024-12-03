import './about.css';
import './Components/Navigation';
import React, { useEffect } from 'react';
import NavMobile from './Components/Navigation';
import listener from './keybaord_listner';
import BGImage from './static/images/1361510.jpeg';

function About() {
  return (<>
    <NavMobile />
    <div className="everything">
      <div className='Intro'>
        <h3>About page</h3>
      </div>
      <div className="hr"><h3>For you Hr</h3></div>
      <div className="container">
        <div className="text">
          I'm a tech enthusiast with a passion for operating systems, networking, and software development. Skilled in Python 3, C, and C++ for network programming and system-level applications, with experience in automating tasks using Bash.
          I’ve worked hands-on with machine learning and virtualization tools like VMware and QEMU (community versions), always driven by curiosity to explore the deeper layers of technology. I thrive on self-driven learning and hands-on experimentation, constantly seeking opportunities to grow and contribute through innovative solutions.
        </div>
      </div>
    </div>
  </>)
}

export default About;
