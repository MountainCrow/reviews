/* eslint-disable */
import React from 'react';

const Review = (props) => (
  <div className='indiv-review'>
    <div id='star-rating'>{props.allReviews.stars}</div>
    <p>{props.allReviews.date}</p>
    <h2>{props.allReviews.title}</h2>
    <p>{props.allReviews.description}</p>
    <p>{props.allReviews.name}</p>
    <div className='helpful-btn'>Helpful(0)</div>
  </div>
)

export default Review;