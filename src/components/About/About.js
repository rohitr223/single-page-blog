import React from 'react'
import "./About.css"
import AboutImage from '../../image/abt.png'

const About = () => {
  return (
    <div id="about">
      <div className="about-info">
        <h3>About</h3>
        <div className="about-container">
          <div className="about-col-1">
            <img src={AboutImage} alt="about-image" className="about-image" />
          </div>
          <div className="about-col-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Consequuntur harum aliquam, quos porro voluptas iste voluptatum
              dignissimos aliquid nesciunt. Quisquam necessitatibus illo omnis 
              animi, cupiditate ipsam maxime iste beatae corrupti doloremque 
              repellat obcaecati odio non? Eius repellendus at asperiores ea 
              voluptatum, pariatur ipsa fuga quam similique aut? Impedit, 
              consectetur officia!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About