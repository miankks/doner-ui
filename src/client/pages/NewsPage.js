import React, { Component } from 'react'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import PropTypes, { object } from 'prop-types'
import { connect } from 'react-redux'

import './HomePage.css'
import HomePageIcon from '../components/HomePageIcon/HomePageIcone'
import NewsApi from '../utils/getNews'
import News from '../components/DonorDonations/DonorViewPackage/News'

class NewsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: [],
      readMore: false,
    }
    this.setReadMore = this.setReadMore.bind(this)
  }
  componentDidMount() {
    let newsData = ''
    newsData = NewsApi.getNews()
    this.setState({
      news: newsData,
    })
  }
  setReadMore = () => {
    this.setState({
      readMore: !this.state.readMore,
    })
  }
  render() {
    return (
      <div>
        <BreadcrumbsItem to="/">
          <HomePageIcon />
        </BreadcrumbsItem>
        <BreadcrumbsItem to="/donations">Nyheter</BreadcrumbsItem>
        <News
          news={this.state.news}
          readMore={this.state.readMore}
          setReadMore={this.setReadMore}
        />
      </div>
    )
  }
}

NewsPage.propTypes = {
  setReadMore: PropTypes.func,
}
function mapStateToProps(state) {
  return {
    news: state.news,
  }
}
function loadData(store) {
  return store.dispatch(NewsApi.getNews)
}

export default {
  loadData,
  component: connect(mapStateToProps)(NewsPage),
}
