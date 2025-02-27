import React from 'react'
import "./skills.css"
const Skills = () => {
  return (
    <>
    <div className="skill-container">
    <h1>Skills</h1>
  <div className="skill-section1">
   <div className="skill1">
        <div className="skill-name">HTML</div>
        <div className="skill-bar">
            <div className="skill-per" style={{maxWidth:'75%'}}per='75%'></div>
        </div>
    </div> 
    <div className="skill2">
        <div className="skill-name2">CSS</div>
        <div className="skill-bar2">
            <div className="skill-per2"
            style={{maxWidth:'60%'}}per="60%"></div>
        </div>
    </div> 
  </div>

  <div className="skill-section2">
   <div className="skill3">
        <div className="skill-name3">JAVASCRIPT</div>
        <div className="skill-bar3">
            <div className="skill-per3" style={{maxWidth:'48%'}}per='48%'></div>
        </div>
    </div> 
    <div className="skill4">
        <div className="skill-name4">JQUERY</div>
        <div className="skill-bar4">
            <div className="skill-per4"
            style={{maxWidth:'22%'}}per="22%"></div>
        </div>
    </div> 
  </div>

  <div className="skill-section3">
  <div className="skill5">
        <div className="skill-name5">BOOTSTRAP</div>
        <div className="skill-bar5">
            <div className="skill-per5"
            style={{maxWidth:'41%'}}per="41%"></div>
        </div>
    </div> 
   <div className="skill6">
        <div className="skill-name6">REACT</div>
        <div className="skill-bar6">
            <div className="skill-per6" style={{maxWidth:'33%'}}per='33%'></div>
        </div>
    </div> 
  </div>
    </div>
    </>
  )
}

export default Skills
