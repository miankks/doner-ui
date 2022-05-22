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
        <div className="tile-inner">
          <h1>Hej {user.name}!</h1>
          <p>
            Tack för att du är med Eways! Du gör en stor skillnad mot Eways.
          </p>
        </div>
      </div>
    )
  }

  renderSignIn() {
    return (
      <div className="tile tile-welcome">
        <div className="tile-inner">
          <h1>Hej!</h1>
          <p>
            Välkommen till dina sidor på Eways!{' '}
            <Link to="/login">Logga in</Link> för att se dina framsteg.
          </p>
        </div>
      </div>
    )
  }

  renderUserTiles() {
    return (
      <React.Fragment>
        <div className="tile tile-researchpackages">
          <div className="tile-inner">
            <h1>Nyheter</h1>
          </div>
          <div className="tile-buttons">
            <Link to="/newspage">
              <Button kind="secondary" {...{ className: 'button-white' }}>
                Läs mer!
              </Button>
            </Link>
          </div>
        </div>
        <div className="tile tile-researchpackages">
          <div className="tile-inner">
            <h1>Pågående Kurser</h1>
            <p>Vilka kurser erbjuder vi just nu?</p>
          </div>
          <div className="tile-buttons">
            <Link to="/packages">
              <Button kind="secondary" {...{ className: 'button-white' }}>
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
        <div className="row flex-row">
          {this.props.user
            ? this.renderWelcome(this.props.user)
            : this.renderSignIn()}
        </div>
        <div className="row flex-row">
          {this.props.user ? this.renderUserTiles() : ''}
        </div>
      </React.Fragment>
    )
  }
}

HomePage.propTypes = {
  user: PropTypes.object,
}

function mapStateToProps(state) {
  return { user: state.current_user }
}

export default {
  component: connect(mapStateToProps)(HomePage),
}

{
  /* <div className="tile-buttons">
                <Link to="/ewaysinfo">
                  <Button kind="secondary" {...{ className: 'button-white' }}>
                    Läs mer!
                  </Button>
                </Link>
              </div> */
}
