import React, { Component } from 'react'
import {BreadcrumbsItem} from 'react-breadcrumbs-dynamic'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPackageById } from '../actions'

import requireAuth from '../components/hocs/requireAuth'
import DonationPackage from '../components/DonorDonations/DonationPackage'
import './HomePage.css'
import HomePageIcon from '../components/HomePageIcon/HomePageIcone'

class PackagePage extends Component {
  componentDidMount() {
    this.props.fetchPackageById(this.props.match.params)
  }

  render() {
    return (
      <div>
        <BreadcrumbsItem to='/'><HomePageIcon /></BreadcrumbsItem>
        <BreadcrumbsItem to={'/packages/' + this.props.match.params.id}>{this.props.packages[this.props.match.params.id] ? this.props.packages[this.props.match.params.id].name : '--'}</BreadcrumbsItem>
        {this.props.packages[this.props.match.params.id] ? (<DonationPackage researchPackage={this.props.packages[this.props.match.params.id]} />) : (<div/>)}
      </div>
    )
  }
}

PackagePage.propTypes = {
  fetchPackageById: PropTypes.func,
  packages: PropTypes.object,
  match: PropTypes.object
}

function mapStateToProps(state) {
  return {
    packages: state.packages
  }
}

function loadData(store, params) {
  return store.dispatch(fetchPackageById(params))
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchPackageById })(requireAuth(PackagePage))
}

