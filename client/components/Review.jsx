/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Date = styled.p`
  color: #303030;
  font-size: 14px;
  margin: 0px 0px 5px;
  font-family: sans-serif;
`;

const Title = styled.div`
  color: #303030;
  font-size: 14px;
  margin: 0px 0px 15px;
  font-family: sans-serif;
  font-weight: 700;
`;

const Description = styled.div`
  color: #303030;
  font-size: 14px;
  margin: 0px 0px 15px;
  font-family: sans-serif;
`;

const Button = styled.div`
  background-color: #6c7c57;
  padding: 5px 10px;
  font-family: sans-serif;
  font-size: 12px;
  color: #FFFFFF;
  min-width:90px;
  max-width:100px;
  border-radius:3px;
  text-align: center;
  z-index: 1;
`;

const ReviewContainer = styled.div`
  padding: 30px 3px;
  border-bottom: 1px solid #d6d6d6;
`;

const Fullicon = styled.i`
  color: #cc1517;
`;


class Review extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      rating: 0,
    }

    this.createStars = this.createStars.bind(this);
  }

  componentDidMount(){
    const { stars } = this.props.allReviews;
    this.setState({rating: stars});
  }

  createStars(starRating){
    let blankStar = 5 - starRating;
    let store = [];
    for(let i = 0; i < starRating; i++){
      store.push(<Fullicon className="material-icons starColo" key={i}>star</Fullicon>)
    }
    for(let j = 0; j < blankStar; j++){
      store.push(<i className="material-icons" key={10+j} id='blank_star'>star</i>)
    }

    return store;
  }


  render(){
    const { stars, date, title, description, name } = this.props.allReviews;
    return(
      <ReviewContainer className='indiv-review'>
        <div id='star-rating'>{this.createStars(stars)}</div>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Title>{name}</Title>
        <Button className='helpful-btn'>Helpful(0)</Button>
      </ReviewContainer>
    )
  }
}

export default Review;



// const Review = (props) => (
//   <ReviewContainer className='indiv-review'>
//     <div id='star-rating'>{props.allReviews.stars}</div>
//     <Date>{props.allReviews.date}</Date>
//     <Title>{props.allReviews.title}</Title>
//     <Description>{props.allReviews.description}</Description>
//     <Title>{props.allReviews.name}</Title>
//     <Button className='helpful-btn'>Helpful(0)</Button>
//   </ReviewContainer>
// )