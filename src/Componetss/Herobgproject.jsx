import React from 'react'
import "./herobgproject.css"

const Herobgproject = (prop) => {
  return (
   <>
   <div className="hero-img">
    <div className="heading">
        <h1>{prop.heading}</h1>
        <p>{prop.textp}</p>
    </div>
   </div>
   </>
  )
}

export default Herobgproject
