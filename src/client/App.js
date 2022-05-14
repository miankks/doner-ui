import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import Header from './components/Header/Header'
import { fetchCurrentUser } from './actions'

import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser()
  }

  render() {
    return (
      <div>
        <Header />
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

App.propTypes = {
  fetchCurrentUser: PropTypes.func,
  route: PropTypes.object
}

export default {
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
  component: connect(null, { fetchCurrentUser })(App)
}
