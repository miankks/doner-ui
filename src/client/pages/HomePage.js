import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'carbon-components-react'

import './HomePage.css'

class HomePage extends Component {
  renderWelcome(user) {
    return (
      <div className="tile tile-welcome">
        <div className='tile-inner'>
          <h1>Hej {user.name}!</h1>
          <p> Tack för att du är med i kampen mot fondon! Din gåva gör en stor skillnad i forskning mot fondon. </p>
        </div>
      </div>
    )
  }

  renderSignIn() {
    return (
      <div className="tile tile-welcome">
        <div className='tile-inner'>
          <h1>Hej!</h1>
          <p>Välkommen till dina sidor på Fonden! <Link to='/login'>Logga in</Link> för att se dina gåvor och våra forskningsområden.</p>
        </div>
      </div>
    )
  }

  renderUserTiles() {
    return (
      <React.Fragment>
        <div className='tile tile-researchpackages'>
          <div className='tile-inner'>
            <h1>Pågående insamlingar</h1>
            <p>Vilka forskningsområden samlar vi in till just nu?</p>
          </div>
          <div className='tile-buttons'>
            <Link to='/packages'>
              <Button kind="secondary" {...{ className: 'button-white' }}>
                Läs mer!
              </Button>
            </Link>
          </div>
        </div>
        <div className='tile tile-donations'>
          <div className='tile-inner'>
            <h1>Se dina tidigare gåvor</h1>
            <p>Här får du koll på var dina gåvor befinner sig just nu.</p>
          </div>
          <div className='tile-buttons'>
            <Link to='/donations'>
              <Button kind="secondary" {...{ className: 'button-blue' }}>
                Läs mer!
              </Button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment>
        <div className='row flex-row'>
          {this.props.user ? this.renderWelcome(this.props.user) : this.renderSignIn()}
        </div>
        <div className='row flex-row'>
          <div className='tile tile-about'>
            <div className='tile-inner'>
              <h1>Blockchain håller koll på din gåva</h1>
            </div>
            <div className='tile-buttons'>
              <Link to='/blockchain'>
                <Button kind="secondary" {...{ className: 'button-white' }}>
                  Läs mer!
                </Button>
              </Link>
            </div>
          </div>
          {this.props.user ? this.renderUserTiles() : ''}
        </div>
      </React.Fragment>
    )
  }
}

HomePage.propTypes = {
  user: PropTypes.object
}

function mapStateToProps(state) {
  return { user: state.current_user }
}

export default {
  component: connect(mapStateToProps)(HomePage)
}
