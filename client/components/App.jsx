/* eslint-disable */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import regeneratorRuntime from "regenerator-runtime";

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
      reviews:[],
      sortBy: "Top Rated",
    };

    this.giveAllRatings = this.giveAllRatings.bind(this);
    this.getSortState = this.getSortState.bind(this);
    this.getReviews = this.getReviews.bind(this);
  }

  // state never gets put into the react components
  // though some how the state i getting passed down to the reviewlist and rendered
  // which would be ok but later I need to referenc the state in order to render a sorted version of the reviews.
  // the normal way of the axios functions is written below th export function vvvvvvvvv line 89


  getReviews() {
    axios
      .get('/reviews')
      .then((results) => {
        if (results.data.length === 0) {
          console.log("here is results: " , results.data);
        } else {
          const rob = results.data.splice(0, results.length)
          this.setState({
            reviews: rob,
            renderData: true,
            allRatingsArr: this.giveAllRatings(),
          }, () => console.log("here is results: " , results.data));
        }
      })
      .catch((err) => { throw err; });
  }

  componentDidMount() {
    // this.getReviews()

    axios.get('/reviews')
      .then((results) => {
        if (results.data.length === 0) {
          console.log("here is results: " , results.data);
        } else {
          console.log(results.data)
          this.setState({
            reviews: results.data,
            renderData: true,
          });
        }
      })
      .catch((err) => { throw err; });
  }

  getSortState(term) {
    this.setState({
      sortBy: term.target.textContent,
    })
  }

  giveAllRatings() {
    const store = [];
    const { reviews } = this.state;
    console.log("in give all ratings: ",reviews)
    if (reviews && reviews.length > 0) {
      reviews.forEach((review) => {
        store.push(review.stars);
      });
      return store;
    }
    return []
  }



  render() {
    console.log("Rendering in App Component: ", this.state)
    if ( this.state.reviews && this.state.reviews.length > 0 ) {
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



//  getReviews() {
//     axios
//       .get('/reviews')
//       .then((results) => {
//         this.setState({
//           reviews: data,
//           renderData: true,
//           allRatingsArr: this.giveAllRatings(),
//         });
//       })
//       .catch((err) => { throw err; });
//   }

// getReviews = async () => {
  //   let res = await axios.get('/reviews');
  //   console.log(res)
  //   this.setState({reviews: res.data})
  //   //console.log(this.state)
  // }
