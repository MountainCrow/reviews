import React from 'react';
import styled from 'styled-components';
import SortDropDown from './SortDropDown.jsx'

const RevHead = styled.div`
  max-width: 974px;
  font-family: sans-serif;
  padding-bottom:20px;
`;

const Title = styled.div`
  font-size:28px;
  font-weight: 700;
  color: #303030
  font-family: sans-serif;
  margin: 0 0 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content:center;
  font-size: 16px;
  padding-bottom: 15px;
  border-bottom: 1px solid #d6d6d6;
  position:relative;
`;

const Sort = styled.div`
  margin-left:auto;
  /* left: 90% */
  position:relative;
`;

const Button = styled.div`
  border-top: 1px solid #d6d6d6;
  background-color: #6c7c57;
  padding: 15px 25px;
  margin: 13px 0px 0px;
  font-family: sans-serif;
  font-size: 12px;
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

const Fullicon = styled.i`
  color: #cc1517;
`;

const Halficon = styled.i`
  color: #cc1517;
`;

const EmptyStar = styled.i`
  color: #cc1517;
`;

const AvgNum = styled.span`
  font-size: 20px;
  margin: 0 5px;
`;

const StarContainer = styled.div`
  margin-left: 5px;
`;

const SortHolder = styled.div`
  position:absolute;
  left: -150px;
  z-index:10;
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  width:150px
`;

const SortBtn = styled.div`
  /* text-align:rightSortBtn */
  margin-bottom: 5px;
  display:flex;
  justify-content:center;
  align-content:center;

  &:hover{
    color:firebrick;
  }
`;

const P = styled.p`
 margin: 3px 0 0 0;
`;

class ReviewHead extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dropDown: false,
    };

    this.getAverage = this.getAverage.bind(this);
    this.openDropDown = this.openDropDown.bind(this);
    this.displayDropDown = this.displayDropDown.bind(this);
  }

  getAverage() {
    const { allRatings } = this.props;
    const arr = allRatings;
    if (arr.length > 0) {
      const sum = arr.reduce((a, b) => a + b);
      const avg = sum / arr.length;
      return avg;
    }

    return 0;
  }

  createStars(num) {
    const store = [];
    const rounded = Math.floor(num); // 3.0
    for (let i = 0; i < rounded; i++) {
      store.push(<Fullicon className="material-icons " key={i}>star</Fullicon>);
    }
    if (num > rounded) {
      store.push(<Halficon className="material-icons " key="1/2">star_half</Halficon>);
    }
    const blankStar = 5 - store.length;
    for (let j = 0; j < blankStar; j++) {
      store.push(<EmptyStar className="material-icons" key={10 + j} id="blank_star">star_border</EmptyStar>);
    }

    return store;
  }

  openDropDown() {
    const { dropDown } = this.state;
    this.setState({ dropDown: !dropDown });
    this.displayDropDown();
  }

  displayDropDown() {
    const { dropDown } = this.state;
    const { getSort } = this.props;
    if (dropDown) {
      return (
        <SortHolder id="sort_holder">
          <SortBtn>
            <P>Hide Sorting</P>
            <i className="material-icons-round">navigate_before</i>
          </SortBtn>
          <SortDropDown getSort={getSort} />
        </SortHolder>
      );
    }

    return (
      <SortHolder id="sort_holder">
        <SortBtn>
          <P>Sort By </P>
          <i className="material-icons-round">navigate_next</i>
        </SortBtn>
      </SortHolder>
    );
  }

  render() {
    const { dropDown } = this.state;
    return (
      <RevHead>
        <Title>Reviews</Title>
        <Info>
          <div>
            Overall Rating:
            <AvgNum>
              {`${this.getAverage().toFixed(2)}`}
            </AvgNum>
          </div>
          <StarContainer>
            {this.createStars(this.getAverage())}
          </StarContainer>
          <Sort id="sort-dropdown" onClick={this.openDropDown}>
            {this.displayDropDown()}
          </Sort>
        </Info>
        <Button type="submit">Write A Review</Button>
      </RevHead>
    );
  }
}

export default ReviewHead;
