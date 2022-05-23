import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'

import './tour.css'

const Tour = (props) => {
  const setReadMore = () => {
    props.setReadMore()
  }
  return (
    <article className="single-tour">
      <img src={props.image} alt={props.name} />
      <footer>
        <div className="tour-info">
          <h4>{props.name}</h4>
        </div>
        <p>
          {props.readMore ? props.info : `${props.info.substring(0, 200)}...`}
          <button onClick={setReadMore}>
            {/* <button onClick={() => setReadMore(!readMore)}> */}
            {props.readMore ? 'show less' : 'read more'}
          </button>
        </p>
      </footer>
    </article>
  )
}

export default Tour
