import React from 'react'
import "./aboutcontent.css"
import { Link } from 'react-router-dom'
import { assets3, assets4 } from '../assets/images/Assests'
const AboutContent = () => {
  return (
    <>
    <div className="about">
        <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a front-end developer with a passion for creating intuitive and dynamic user experiences. I specialize in responsive design, ensuring websites look great on any device. I'm dedicated to learning and growing in web development.</p>
        <Link to="/contact">
            <button className='btn'>Contact</button>
        </Link>
        </div>
        <div className="right">
        <div className="img-container">
            <div className="img-stack top">
            
            <img src={assets4.contactme2} className='img'  alt="flase" />
            </div>
            <div className="img-stack bottom">
            <img src={assets3.contactme} className='img' alt="true" />
            </div>
        </div>

        </div>
    </div>
    </>
  )
}

export default AboutContent
