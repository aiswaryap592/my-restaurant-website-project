import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import './footer.css';
function Footer() {
  return (
    <div className="footer">
      <div className="socialmedia">
     
        <FaInstagram />
        <FaFacebook/>
        <FaTwitter/>
        <FaWhatsapp/>
        <p>&copy;pedrotechpizz.com</p>
        </div>
        
      

    </div>
  )
}

export default Footer
