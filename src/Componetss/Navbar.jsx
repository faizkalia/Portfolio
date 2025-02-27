import { Link } from "react-router-dom"
import "./navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import React, { useState } from 'react'



const Navbar = () => {
    const [click,setClick]=useState(false)
    const handleClick=()=> setClick(!click)

    const [color,setColor]=useState(false)
    const ChangeBg=()=>{
      if(window.scrollY >= 100){
        setColor(true);
      }else{
        setColor(false)
      }
    }

    
    window.addEventListener('scroll',ChangeBg)
  return (
    <div className={color?'header header-bg':'header'}>
      
      <Link to="/">
        <h2>Portfolio</h2>
        
      </Link>
      <ul className={click?'nav-menu active':'nav-menu'}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        
      </ul>
      
      <div className="hamburger" onClick={handleClick}>
        {click?(<IoClose size={"20"} style={{cursor:'pointer'}}/>):(<GiHamburgerMenu size={"20"} style={{cursor:'pointer'}}/>)}
      
      
      </div>
    </div>
  )
}

export default Navbar
