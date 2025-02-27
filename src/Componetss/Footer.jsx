import React from 'react'
import "./footer.css"
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                <FaHome size={'20'} style={{color:'white',marginRight:'2rem'}}/>
                <div>
                    <p>811,Sanjan Bunder Nargoal Road Gujarat</p>
                    <p>India</p>
                </div>
                </div>
                <div className="phone">
                <h4>
                <FaPhone size={'20'} style={{color:'white',marginRight:'2rem'}}/>
                +91&nbsp;9727414054
                </h4>
                </div>
                <div className="email">
                <h4>
                <MdEmail size={'20'} style={{color:'white',marginRight:'2rem'}}/>
                faizkalia786@gmail.com
                </h4>
                </div>
            </div>
            <div className="right">
            <h4>About me</h4>
            <p>Aspiring Frontend Developer with a strong foundation in web development technologies and a keen interest in creating user- friendly and visually appealing websites.

            {/* As a recent graduate, I am eager to apply my skills and knowledge in a professional setting. My goal is to become a valuable team member and contribute to the success of the organization.     */}
            </p>
            <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100016952438393" target='_blank'><FaFacebookSquare size={'20'} style={{color:'white',cursor:'pointer'}}/>&nbsp;</a>
            <a href="https://www.instagram.com/faiz_kaliya_/" target='_blank'><FaSquareInstagram size={'20'} style={{color:'white',cursor:'pointer'}}/>&nbsp;</a>
           <a href="" target='_blank'><FaSquareXTwitter size={'20'} style={{color:'white',cursor:'pointer'}}/>&nbsp;</a>
           <a href="https://www.linkedin.com/in/faiz-kalia-front-end-developer/" target='_blank'><FaLinkedin size={'20'} style={{color:'white',cursor:'pointer'}}/></a>
            
            </div>
            </div>
        </div>
    </div>
    <div className="copy-write">
          <p>&copy; Faiz Kalia. All rights reserved</p>
        </div>
    </>
  )
}

export default Footer
