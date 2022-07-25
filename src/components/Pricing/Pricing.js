import React from 'react'
import "./Pricing.css"
import {Link} from 'react-scroll'

const Pricing = () => {
  return (
    <div id="pricing">
      <div className="pricing-info">
        <h3>Pricing</h3>
        <div className="pricing-container">
          <div className="pricing-col">
            <div className="card">
              <h3>$30</h3>
              <li>1 - Page</li>
              <li>Responsive</li>
              <li>Design Customization</li>
              <li>Content Upload</li>
              <li>Include Source Code</li>
              <div className="card-btn">
                <Link to="#" className="c-btn" >Order Now</Link>
              </div>
            </div>
          </div>
          <div className="pricing-col">
            <div className="card">
              <h3>$100</h3>
              <li>4 - Pages</li>
              <li>Responsive</li>
              <li>Design Customization</li>
              <li>Content Upload</li>
              <li>Include Source Code</li>
              <div className="card-btn">
                <Link to="#" className="c-btn" >Order Now</Link>
              </div>
            </div>
          </div>
          <div className="pricing-col">
            <div className="card">
              <h3>$200</h3>
              <li>8 - Pages</li>
              <li>Responsive</li>
              <li>Design Customization</li>
              <li>Content Upload</li>
              <li>Include Source Code</li>
              <div className="card-btn">
                <Link to="#" className="c-btn" >Order Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing