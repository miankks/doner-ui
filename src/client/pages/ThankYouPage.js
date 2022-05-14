import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BusinessCard from '../components/BusinessCard'
import './ThankYouPageStyle.css'

class ThankYouPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="thanks-container thanks-image">
          <h4 className='thanks-message'>Varmt tack för din generösa gåva i kampen mot fondon!</h4>
        </div>
        <div className="thanks-container thanks-centered">
          <h4>
            <Link to='/packages'>
              Läs mer om fondens arbete för att utrota fondon.
            </Link>
          </h4>
        </div>
        <div className="thanks-container">
          <BusinessCard />
        </div>
      </React.Fragment>
    )
  }
}
export default {
  component: ThankYouPage
}
