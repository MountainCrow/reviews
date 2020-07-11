/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Date = styled.p`
  color: #303030;
  font-size: 14px;
  margin: 0px 0px 5px;
  font-family:  'M PLUS Rounded 1c', sans-serif;`;

const Title = styled.div`
  color: #303030;
  font-size: 14px;
  margin-bottom: 15px;
  font-family:  'M PLUS Rounded 1c', sans-serif;  font-weight: 700;
`;

const Star = styled.div`
  margin-bottom:10px;
`;

const Description = styled.div`
  color: #303030;
  font-size: 14px;
  margin: 0px 0px 15px;
  font-family:  'M PLUS Rounded 1c', sans-serif;`;

const Button = styled.div`
  background-color: #6c7c57;
  padding: 5px 10px;
  font-family:  'M PLUS Rounded 1c', sans-serif;  font-size: 12px;
  color: #FFFFFF;
  min-width:90px;
  max-width:100px;
  border-radius:3px;
  text-align: center;
  z-index: 2;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.3);
  position: relative;
  top: 0;
  transition: top ease 0.5s;


  &:hover {
    top: -5px;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.3);
  }

  &:active {
    background-color: #4d573e;
    top: 0px ;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.3);
  }

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
      helpful: 0,
    }

    this.createStars = this.createStars.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(){
    const newNum = this.state.helpful + 1;
    console.log('Button CLicked');
    this.setState({helpful: newNum})
  }



  render(){
    const { stars, postdate, title, description, firstname, lastname } = this.props.allReviews;
    const lastInit = lastname.split('')[0].toUpperCase();
    let { helpful } = this.state;
    // let date = new Date(postdate);
    // console.log('date is', date);
    // fix this date thing when I get the chance
    return(
      <ReviewContainer className='indiv-review'>
        <Star id='star-rating'>{this.createStars(stars)}</Star>
        <Date>{moment(postdate).format("MMM Do YY")}</Date>
        <Title className="title">{title}</Title>
        <Description>{description}</Description>
        <Title>{ `${firstname} ${lastInit}.` }</Title>
        <Button className='helpful-btn' id={firstname} onClick={this.handleClick}>Helpful({helpful})</Button>
      </ReviewContainer>
    )
  }
}

export default Review;
