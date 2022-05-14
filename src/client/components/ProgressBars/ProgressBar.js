import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProgressBar extends Component {
  calculate(total, current) {
    if (total <= 0 || current < 0) {
      throw 'Bad values'
    }

    return (current / total).toFixed(2)
  }

  render() {
    let factor = this.calculate(this.props.total, this.props.current)
    let barHeight = 480 * (1 - (factor < 1 ? factor : 1))
    let width = this.props.width || '100%'

    let viewBox = '0 0 250 600'
    let digitMarkerWidth = 7
    let digitX = 110
    let digitDY = 45
    let digitSize = '50px'
    let digit = (factor * 100).toFixed(0)

    if (this.props.largerDigits) {
      viewBox = '0 -50 375 650'
      digitMarkerWidth = 10
      digitX = 120
      digitDY = 60
      digitSize = '100px'
    }

    return (
      <svg width={width} preserveAspectRatio="xMaxYMid meet" viewBox={viewBox}>
        <defs>
          <clipPath id="clipPathRed">
            <rect x="31" y="31" rx="15" ry="15" width="38" height="550" />
          </clipPath>
          <clipPath id="clipPathWhite">
            <rect x="30" y="30" rx="15" ry="15" width="40" height="550" />
          </clipPath>
        </defs>

        <rect x="25" y="25" rx="15" ry="15" width="50" height="550" stroke="black" strokeWidth="5" />
        <rect x="29" y="28" rx="15" ry="15" width="42" height="550" stroke="white" strokeWidth="4" fill="white" />

        <circle cx="50" cy="550" r="45" stroke="black" strokeWidth="5" fill="white" />
        <circle cx="50" cy="550" r="39" stroke="white" strokeWidth="2" fill="red" />

        <rect x="20" y="31" width="50" height="500" fill="red" style={{ clipPath: 'url(#clipPathRed)' }} />

        <line x1="73" y1="78" x2="90" y2="78" stroke="black" strokeWidth="5" />
        <line x1="73" y1="126" x2="90" y2="126" stroke="black" strokeWidth="5" />
        <line x1="73" y1="174" x2="90" y2="174" stroke="black" strokeWidth="5" />
        <line x1="73" y1="222" x2="90" y2="222" stroke="black" strokeWidth="5" />
        <line x1="73" y1="270" x2="90" y2="270" stroke="black" strokeWidth="5" />
        <line x1="73" y1="318" x2="90" y2="318" stroke="black" strokeWidth="5" />
        <line x1="73" y1="366" x2="90" y2="366" stroke="black" strokeWidth="5" />
        <line x1="73" y1="414" x2="90" y2="414" stroke="black" strokeWidth="5" />
        <line x1="73" y1="462" x2="90" y2="462" stroke="black" strokeWidth="5" />

        {factor < 1 ? (<rect x="20" y="30" width="50" height={barHeight} fill="white" style={{ clipPath: 'url(#clipPathWhite)' }} />) : ''}
        <line x1="25" y1={30 + barHeight} x2="100" y2={30 + barHeight} stroke="black" strokeWidth={digitMarkerWidth} />
        <text x={digitX} y={digitDY + barHeight} style={{ fill: 'black', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: digitSize }}>{digit}%</text>

        Sorry, your browser does not support inline SVG.
      </svg>
    )
  }
}

ProgressBar.propTypes = {
  width: PropTypes.string,
  largerDigits: PropTypes.bool,
  current: PropTypes.number,
  total: PropTypes.number
}

export default ProgressBar
