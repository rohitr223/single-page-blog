import React from 'react'
import './Contact.css'
import {Link} from 'react-scroll'

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-info">
            <h3>Contact Us</h3>
            <div className="contact-form">
                <input type="text" placeholder="Your Name" />
                <br /><br />
                <input type="email" placeholder="Your Email" />
                <br /><br />
                <input type="text" placeholder="Your Subject" />
                <br /><br />
                <textarea placeholder="Your Message"></textarea>
                <div className="contact-btn">
                    <Link to="#" className="c-btn">Submit</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact