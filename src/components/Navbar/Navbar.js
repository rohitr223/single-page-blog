import React, {useState} from 'react'
import "./Navbar.css"
import {Link} from 'react-scroll'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <div>
        <nav className="navbar-container">
            <h2 className="logo white">CoderS</h2>
            <ul className={click ? 'nav-mobile-links' : 'nav-links'} onClick={() => setClick(false)}>
              <li className="links-name">
                <Link to="home" className="white links">HOME</Link>
              </li>
              <li className="links-name">
                <Link to="about" className="white links">ABOUT</Link>
              </li>
              <li className="links-name">
                <Link to="pricing" className="white links">PRICING</Link>
              </li>
              <li className="links-name">
                <Link to="contact" className="white links">CONTACT</Link>
              </li>
            </ul>
            <div className="icons" onClick={handleClick}>
              {click ? <FaTimes size={25} style={{color: '#fff'}} /> : <FaBars size={25} style={{color: '#fff'}} /> }
            </div>
        </nav>
    </div>
  )
}

export default Navbar