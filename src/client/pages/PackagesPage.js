import React, { Component } from 'react'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchActivePackages } from '../actions'

import requireAuth from '../components/hocs/requireAuth'
import PackageTiles from '../components/PackageTiles/PackageTiles'
import './HomePage.css'
import HomePageIcon from '../components/HomePageIcon/HomePageIcone'

class PackagesPage extends Component {
  componentDidMount() {
    this.props.fetchActivePackages()
  }

  render() {
    return (
      <div>
        <BreadcrumbsItem to="/">
          <HomePageIcon />
        </BreadcrumbsItem>
        <BreadcrumbsItem to="/packages">Pågående kurser</BreadcrumbsItem>
        <PackageTiles packages={this.props.activePackages} />
      </div>
    )
  }
}

PackagesPage.propTypes = {
  fetchActivePackages: PropTypes.func,
  activePackages: PropTypes.arrayOf(PropTypes.object),
}

function mapStateToProps(state) {
  return {
    activePackages: state.activePackages,
  }
}

function loadData(store) {
  return store.dispatch(fetchActivePackages())
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchActivePackages })(
    requireAuth(PackagesPage)
  ),
}
