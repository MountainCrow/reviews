/* eslint-disable */
import React from 'react';
import Review from './Review.jsx';
import styled from 'styled-components';
import Slider from 'react-slick';
import { SampleNextArrow, SamplePrevArrow } from './ReactSlick/Arrows.jsx'


const ReviewMain = styled.div`
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
      draggable: false,
      customPaging: i => (
        <div
          style={{
            fontSize: "18px",
            lineHeight: "18px",
            verticalAlign: "middle",
            fontFamily: "sans-serif",
            // position: "absolute",
            // width:"170px",
            // top: '97%',
            // left: '70%'
          }}
        >
        {i+1}
        </div>
      ),
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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