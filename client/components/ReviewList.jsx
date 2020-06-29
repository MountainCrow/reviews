/* eslint-disable */
import React from 'react';
import Review from './Review.jsx';
import styled from 'styled-components';
import Slider from 'react-slick';
import helpers from '../../util/sortFunctions.js'
import { SampleNextArrow, SamplePrevArrow } from './ReactSlick/Arrows.jsx'

const ReviewMain = styled.div`
  max-width: 974px;
`;

class ReviewList extends React.Component {
  constructor(props){
    super(props);
    this.carouselStructure = this.carouselStructure.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
  }

  carouselStructure(allReviews) {
    const revBlock = [];
    while(allReviews.length > 0){
      revBlock.push(allReviews.splice(0,2));
    }

    console.log("Reviews Blocks: " , revBlock);

    return (
      revBlock.map((setOfReviews, index) => {
        if(setOfReviews.length == 2){
          return(
            <div key={index}>
              <Review allReviews={setOfReviews[0]} />
              <Review allReviews={setOfReviews[1]} />
            </div>
          )
        }else{
          return (
            <div key={index}>
              <Review allReviews={setOfReviews[0]} />
            </div>
          )
        }

      })
   )
  }

  sortReviews(reviews){
    console.log("Reviews: ", reviews[0])
    const { sortBy } = this.props;
    if (sortBy === 'Lowest Rated' && reviews.length > 0) {
      const lowestFirst = helpers.lowestRated(reviews);
      return this.carouselStructure(lowestFirst);
    } else if (sortBy === 'Top Rated' && reviews.length > 0) {
      const highestFirst = helpers.highestRated(reviews);
      return this.carouselStructure(highestFirst);
    }
  }

  render(){
    const { allReviews } = this.props;
    const settings = {
      dots:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      customPaging: i => (
        <div
          style={{
            fontSize: "18px",
            lineHeight: "18px",
            verticalAlign: "middle",
            fontFamily: "sans-serif",
          }}
        >
        {i+1}
        </div>
      ),
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }
    console.log("Reviews from ReviewList Props: " , allReviews)
    return (
      <ReviewMain id="review-list">
        <Slider {...settings} >
          {
            allReviews ? this.sortReviews(allReviews) : <h1> Loading...</h1>
          }
        </Slider>
      </ReviewMain>
    )
  }
};

export default ReviewList;