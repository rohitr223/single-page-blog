import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import "./Footer.css"
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div>
      <div className="footer-info">
        <h3>Follow Us</h3>
        <div className="footer-icons">
          <FaFacebook className="fa" size={25} style={{color:'#fff'}} />
          <FaInstagram className="fa" size={25} style={{color:'#fff'}} />
          <FaTwitter className="fa" size={25} style={{color:'#fff'}} />
          <FaLinkedin className="fa" size={25} style={{color:'#fff'}} />
        </div>
        <div className="footer-li">
          <li>
            <Link to="home" className="f-li" >HOME</Link>
          </li>
          <li>
            <Link to="about" className="f-li" >ABOUT</Link>
          </li>
          <li>
            <Link to="pricing" className="f-li" >PRICING</Link>
          </li>
          <li>
            <Link to="contact" className="f-li" >CONTACT</Link>
          </li>
        </div>
        <div className="copyright">
          <h5>&copy; 2022. All Rights Reserved.</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer