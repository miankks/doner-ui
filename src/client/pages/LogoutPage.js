import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { fetchLogout } from '../actions'

import './HomePage.css'

class LogoutPage extends Component {

  constructor() {
    super()
    this.state = {
      redirectTo: null
    }
  }

  componentDidMount() {
    this.props.fetchLogout().then(() => {
      setTimeout(() => {
        this.setState({
          redirectTo: '/'
        })
      }, 5000)
    })
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <React.Fragment>
          <div className="tile tile-welcome">
            <div className='tile-inner'>
              <h1>Tack för ditt besök!</h1>
              <p>Du är nu utloggad.</p>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

LogoutPage.propTypes = {
  fetchLogout: PropTypes.func,
}

function loadData(store) {
  return store.dispatch(fetchLogout())
}

export default {
  loadData,
  component: connect(null, { fetchLogout })(LogoutPage)
}
