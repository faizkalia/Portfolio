import React from 'react'
import "./education.css"
import { FaSchool } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
const Education = () => {
  return (
    <>
    <div className="education-container">
        <div className="education-heading">
            <h1>Education</h1>
        </div>
        <div className="education-category">
    <div className="education-Content">
        <div className="left-icon">
        <FaSchool size={'20'} style={{color:'#fff'}}/>
        </div>
        
        <div className="right-content">
        <p>2018</p>
        <p>Secondary School Certificate</p>
        <p>Jadi Rana High School Ghimniye</p>
        </div>
    </div>
    <div className="education-Content2">
        <div className="left-icon icon1">
        <FaSchool size={'20'} style={{color:'#fff'}}/>
        </div>
        
        <div className="right-content">
        <p>2020</p>
        <p>Higher Secondary Certificate</p>
        <p>Pirojsha Godrej Junior College</p>
        </div>
    </div>
    <div className="education-Content3">
        <div className="left-icon">
        <IoIosSchool size={'20'} style={{color:'#fff'}}/>
        </div>
        
        <div className="right-content">
        <p>2023</p>
        <p>Bachelor of Science in (IT)</p>
        <p>N.B.Mehta College of Science & Commerce</p>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Education
