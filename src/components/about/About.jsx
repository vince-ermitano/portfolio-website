import React from 'react'
import './about.css'
// import ME from '../../assets/killua-coffee.png'
// import ME from '../../assets/pfp.JPG'
import ME from '../../assets/mew.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Achievements</h5>
              <small>3.95 CS GPA</small><br></br>
              <small>Provost Honors</small><br></br>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>25+ Completed</small>
            </article>
          </div>

          <p>
            &emsp; Hello! My name is Vince Ermitano and I'm a 4th-year Computer Science student at UC San Diego.
            A majority of my field-related work are projects and assignments from coursework in which I 
            demonstrate foundational knowledge in data structures, algorithms design and analysis, and software
            engineering. I do not have a lot of experience outside of coursework and I have yet to partake
            in an internship that will allow me to apply my current skills in a realistic environment. Therefore,
            I am actively seeking internship roles that will help prepare me for a successful career in 
            software-development/engineering! Feel free to contact me about any inquiries!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About