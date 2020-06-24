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
  margin-bottom: 15px;
  font-family: sans-serif;
  font-weight: 700;
`;

const Star = styled.div`
  margin-bottom:10px;
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
  z-index: 2;
`;

const ReviewContainer = styled.div`
  padding: 30px 3px;
  border-bottom: 1px solid #d6d6d6;
`;

const Fullicon = styled.i`
  color: #cc1517;
`;

const EmptyStar = styled.i`
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
      store.push(<EmptyStar className="material-icons" key={10+j} id='star_border'>star_border</EmptyStar>)
    }

    return store;
  }


  render(){
    const { stars, postDate, title, description, firstName, lastName } = this.props.allReviews;
    const lastInit = lastName.split('')[0].toUpperCase();

    return(
      <ReviewContainer className='indiv-review'>
        <Star id='star-rating'>{this.createStars(stars)}</Star>
        <Date>{postDate}</Date>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Title>{ `${firstName} ${lastInit}.` }</Title>
        <Button className='helpful-btn'>Helpful (0)</Button>
      </ReviewContainer>
    )
  }
}

export default Review;
