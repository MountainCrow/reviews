/* eslint-disable */
import React from 'react';
import Review from './Review.jsx';
import styled from 'styled-components';
import Slider from 'react-slick';

/* React Slick Styling */
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const ReviewMain = styled.div`
  padding: 15px;
  max-width: 974px;
`;

class ReviewList extends React.Component {
  constructor(props){
    super(props);

    this.carouselStructure = this.carouselStructure.bind(this);
  }

  carouselStructure(allReviews) {
    const revBlock = [];
    while(allReviews.length > 0){
      revBlock.push(allReviews.splice(0,2));
    }
    return(
      revBlock.map((setOfReviews, index) => {
        return(
            <div key={index}>
              <Review allReviews={setOfReviews[0]} />
              <Review allReviews={setOfReviews[1]} />
            </div>
        )
      })
    )
  }


  render(){
    const { allReviews } = this.props;
    const settings = {
      dots:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true

    }
    return (
      <ReviewMain id="review-list">
        <Slider {...settings} >
          {
            allReviews ? this.carouselStructure(allReviews) : <h1>No Reviews at this time.</h1>
          }
        </Slider>
      </ReviewMain>
    )
  }
};

export default ReviewList;