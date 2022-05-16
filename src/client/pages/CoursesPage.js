import React, { Component } from 'react'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchDonations } from '../actions'

import requireAuth from '../components/hocs/requireAuth'
import DonorViewPackage from '../components/DonorDonations/DonorViewPackage/DonorViewPackage'
import './HomePage.css'
import HomePageIcon from '../components/HomePageIcon/HomePageIcone'

class DonationsPage extends Component {
  componentDidMount() {
    this.props.fetchDonations()
  }

  render() {
    return (
      <div>
        <BreadcrumbsItem to="/">
          <HomePageIcon />
        </BreadcrumbsItem>
        <BreadcrumbsItem to="/donations">Mina Kurser</BreadcrumbsItem>
        <DonorViewPackage donations={this.props.donations} />
      </div>
    )
  }
}

DonationsPage.propTypes = {
  fetchDonations: PropTypes.func,
  donations: PropTypes.arrayOf(PropTypes.object),
}

function mapStateToProps(state) {
  return {
    donations: state.donations,
  }
}

function loadData(store) {
  return store.dispatch(fetchDonations())
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchDonations })(
    requireAuth(DonationsPage)
  ),
}
