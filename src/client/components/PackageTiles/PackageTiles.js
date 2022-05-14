import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from 'carbon-components-react'

import '../../pages/HomePage.css'
import './PackageTiles.css'
import ProgressBar from '../ProgressBars/ProgressBar'

class PackageTiles extends Component {

  constructor(props) {
    super(props)
    this.state = { showResults: false }
  }

  renderTile(researchPackage, i) {
    return (
      <div className='tile tile-package' key={i}>
        <div className='tile-inner'>
          <div className='tile-inner-column'>
            <div className='tile-inner-text'>
              <h1>{researchPackage.name}</h1>
              <p>{researchPackage.shortDescription}</p>
            </div>

            <div className="tile-buttons">
              <Link to={'/packages/' + researchPackage.id}>
                <Button kind="secondary" {...{ className: 'package-button' }}>
                  Läs mer!
                </Button>
              </Link>
            </div>
          </div>

          <div className="tile-inner-bar">
            <ProgressBar width='70px' total={researchPackage.goal} current={researchPackage.amountRaised} />
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="row flex-wrap-row">
        {this.props.packages.map((researchPackage, i) =>
          (
            this.renderTile(researchPackage, i)
          ))}
      </div>
    )
  }
}

PackageTiles.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.object)
}

export default PackageTiles
