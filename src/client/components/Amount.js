import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Amount extends Component {
  render() {
    return (
      <span>{
        new Intl
          .NumberFormat('sv-SE', { style: 'currency', currency: 'SEK', minimumFractionDigits: 0 })
          .format(this.props.amount)}
      </span>
    )
  }
}

Amount.propTypes = {
  amount: PropTypes.number
}

export default Amount
