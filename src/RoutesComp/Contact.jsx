import React from 'react'
import Navbar from '../Componetss/Navbar'
import HerobgProject from "../Componetss/Herobgproject"
import Footer from '../Componetss/Footer'
import Form from '../Componetss/Form'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HerobgProject heading="CONTACT" textp="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
