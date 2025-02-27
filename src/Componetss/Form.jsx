import React from 'react'
import "./form.css"

import { Link } from 'react-router-dom'


const Form = () => {
  
  return (
    <>
    <div className="form">
        <form >
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Message</label>
            <textarea rows="6" placeholder='Type your message here'></textarea>
            <div className="btn-group">
            <button className='btn' >Submit</button>
            <button className='btn'>
              <a href="faiz_kalia_resume-fd.pdf" download="resume.pdf">Download CV</a>
              </button>
            </div>
            
        </form>
    </div>
    </>
  )
}

export default Form
