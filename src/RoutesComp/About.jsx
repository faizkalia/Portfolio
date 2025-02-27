import React from 'react'
import Navbar from '../Componetss/Navbar'
import Footer from '../Componetss/Footer'
import Herobgproject from '../Componetss/Herobgproject'
import AboutContent from '../Componetss/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Herobgproject heading="ABOUT." textp="I am friendly Front-End Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
