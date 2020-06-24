import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
      reviews: '',
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.giveAllRatings = this.giveAllRatings.bind(this);
  }

  componentDidMount() {
    const request = axios({
      url: '/reviews',
      method: 'GET',
    });

    request
      .then((allreviews) => this.setState({ reviews: allreviews.data }))
      .catch((err) => { throw err; });
  }

  giveAllRatings() {
    const store = [];
    const { reviews } = this.state;
    if (reviews.length > 0) {
      reviews.forEach((review) => {
        store.push(review.stars);
      });
      return store;
    }
    return [];
  }

  render() {
    const { reviews } = this.state;
    return (
      <AppMain id="main">

        <ReviewHead allRatings={this.giveAllRatings()} />
        <ReviewList allReviews={reviews || null} />
      </AppMain>
    );
  }
}

export default App;
