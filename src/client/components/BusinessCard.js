import React, { Component } from 'react'

import './BusinessCard.css'
import mypic from '../static/images/bilaljan.jpg'

class BusinessCard extends Component {

  render() {
    return (
      <div className="card">
        <div className="container">
          <div className="contact-image-div">
            <img src={mypic} className="contact-image" />
          </div>
          <div className="contact-text">
            <p>Kontakta mig så kan jag berätta mer</p>
            <h4><b>Bilal Jan</b></h4>
            <p className="ansvar-text">Avsvarig stora gåvor</p>
            <p>01-234 567 89</p>
            <p className="email-text">bilal.jan@fondon.se</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BusinessCard
