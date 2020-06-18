import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
    };

    this.componentDidMount = this.componentDidMount.bind(this);

  }

  componentDidMount() {
    const request = new Promise(axios({
      url: '/reviews',
      method: 'GET',
    }));

    request
      .then((allreviews) => this.setState({reviews: allreviews }))
      .catch((err) => { throw err; });
  }

  render() {
    return (
      <h1> Working </h1>
    );
  }
}

export default App;