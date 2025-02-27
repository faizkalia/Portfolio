import React from 'react'
import "./heroimg.css"
import { assets } from '../assets/images/Assests'
import { Link } from 'react-router-dom'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
const Herobgimg = () => {
 const [typeEffect]=useTypewriter({
  words:['Front-end Developer'],
  loop:{},
  typeSpeed:100,
  deleteSpeed:40
 })
  return (
    <div>
      <div className="hero">
        <div className="office-desk-img">
            <img src={assets.bgdesk} className='desk-bg' alt="officeDesk" />
        </div>
        <div className="content">
            <h1>Hi, I'm Faiz Kalia</h1>
            <p>{typeEffect}</p>
            <Link to="/project" className='btn'>View My Work</Link>
        </div>
      </div>
    </div>
  )
}

export default Herobgimg
