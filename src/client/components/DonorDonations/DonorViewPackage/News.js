import React from 'react'
import Tour from './Tour'
import './tour.css'

const News = (props) => {
  const setReadMore = () => {
    props.setReadMore()
  }
  return (
    <div>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      {props.news.map((tour) => {
        return (
          <Tour
            key={tour.id}
            {...tour}
            readMore={props.readMore}
            setReadMore={setReadMore}
          />
        )
      })}
    </div>
  )
}
export default News
