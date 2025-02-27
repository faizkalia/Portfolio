import React from 'react'
import "./workcard.css"
import { assets2 } from '../assets/images/Assests'
import WorkcardData from "../Componetss/WorkcardData"
import {  NavLink } from 'react-router-dom'

const WorkCard = ({imgsrc,title,text,view}) => {
    
  return (
    <>
    <div className="project-card">
                <img src={imgsrc} alt="weatherimg" />
                <h2 className='project-title'>{title}</h2>
                <div className="pro-details">
                    <p>{text}</p>
                    <div className="pro-btns">
                        <NavLink to={view} className="btn" target='_blank'>View</NavLink>
                    </div>
                </div>
            </div>
    </>
  )
}


export default WorkCard
