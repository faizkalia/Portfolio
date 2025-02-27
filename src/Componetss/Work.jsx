import React from 'react'
import "./workcard.css"
import WorkcardData from "../Componetss/WorkcardData"
import WorkCard from "../Componetss/WorkCard"
import { assets2 } from '../assets/images/Assests'
import {  NavLink } from 'react-router-dom'

const Work = () => {
  return (
    <>
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {
                WorkcardData.map((val,ind)=>{
                    return(
                        <WorkCard
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        />
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default Work
