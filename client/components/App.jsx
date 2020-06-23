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
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: '',
    };

    this.componentDidMount = this.componentDidMount.bind(this);
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

  render() {
    const { reviews } = this.state;
    return (
      <AppMain id="main">
        <h1>Working</h1>
        <ReviewHead />
        <ReviewList allReviews={reviews || null} />
      </AppMain>
    );
  }
}

export default App;
