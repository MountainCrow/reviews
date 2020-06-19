/* eslint-disable */
import React from 'react';
import Review from './Review.jsx';

class ReviewList extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const { allReviews } = this.props;
    return (
      <div>
        {
          allReviews ? allReviews.map((review, index) => <Review allReviews={review} key={index}/>) : <h1>No Reviews</h1>
        }
      </div>
    )
  }
};

export default ReviewList;