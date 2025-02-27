import React from 'react'
import Navbar from '../Componetss/Navbar'
import Herobgimg from '../Componetss/Herobgimg'
import Footer from '../Componetss/Footer'
import Work from "../Componetss/Work"
import Education from '../Componetss/Education'
import Skills from '../Componetss/Skills'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Herobgimg/>
      <Work/>
      <Skills/>
      <Education/>
      <Footer/>
    </div>
  )
}

export default Home
