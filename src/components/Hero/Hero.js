import React from 'react'
import "./Hero.css"
import {Link} from 'react-scroll'
import HomeImg from '../../image/homeimg.jpg'

const Hero = () => {
  return (
    <div id="home">
      <div className="hero-info">
        <div className="hero-container">
          <div className="hero-col-1">
            <div className="hero-text">
              <p>My Name Is George. I am a</p>
              <h1>React Developer</h1>
              <Link to="about" className="hero-btn">Know More</Link>
            </div>
          </div>
          <div className="hero-col-2">
            <img src={HomeImg} alt="home-image" className="hero-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero