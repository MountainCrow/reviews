/* eslint-disable */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import helpers from '../../util/sortFunctions.js'
import ReviewList from './ReviewList.jsx';
import ReviewHead from './ReviewHead.jsx';

const AppMain = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 974px;
  justify-content: center;
  background-color: #f4f4f4;
  padding: 15px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: null,
    };

    this.giveAllRatings = this.giveAllRatings.bind(this);
    this.getSortState = this.getSortState.bind(this);
  }

  componentDidMount() {
    axios.get('/reviews')
      .then((allReviews) => {
        console.log("All Reviews: ", allReviews)
        this.setState({
          reviews: allReviews.data,
          allRatingsArr: this.giveAllRatings(),
         })})

      .catch((err) => { throw err; });
  }

  getSortState(term) {
    this.setState({
      sortBy: term,
    })
  }

  giveAllRatings() {
    const store = [];
    const { reviews } = this.state;
    if (reviews && reviews.length > 0) {
      reviews.forEach((review) => {
        store.push(review.stars);
      });
      console.log("Store: ", store)
      return store;
    }
    console.log("Ratings returning empty array");
    return []
  }



  render() {
    if ( this.state.reviews ) {
      console.log("Reviews: ",this.state.reviews)
      return (
        <AppMain id="main">
          <ReviewHead getSort={this.getSortState} allRatings={this.giveAllRatings()} />
          <ReviewList allReviews={this.state.reviews} sortBy={this.state.sortBy} />
        </AppMain>
      );
    }

    return (
        <div> Loading...</div>
      )

  }
}

export default App;
