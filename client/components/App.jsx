import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ReviewHead from './ReviewHead.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.componentDidMount = this.componentDidMount.bind(this);

  }

  componentDidMount() {
    const request = axios({
      url: '/reviews',
      method: 'GET',
    });

    request
      .then((allreviews) => this.setState({reviews: allreviews.data }))
      .catch((err) => { throw err; });
  }

  render() {
    const { reviews } = this.state;
    return (
      <div id="main">
        <h1> Working </h1>
        <ReviewHead />
        <ReviewList allReviews={reviews || null} />
      </div>
    );
  }
}

export default App;
