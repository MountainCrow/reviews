/* eslint-disable */

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ReviewList from "../client/components/ReviewList.jsx";
import Review from "../client/components/Review.jsx";

describe('<ReviewList /> React Component Testing', () => {

  test('renders the review list to the dom', () => {
    const wrapper = shallow(<ReviewList />);
    expect(wrapper.find('#review-list')).toHaveLength(1);
  });

  test('renders all reviews to the dom', () => {
    const props = {
      allReviews : [{
        stars: 3,
        title: "Fake Title",
        description: "Fake Description",
        name: "Enzyme Sucks",
        date: "July 19 1993"
      },{
        stars: 3,
        title: "Fake Title",
        description: "Fake Description",
        name: "Enzyme Sucks",
        date: "July 19 1993"
      },{
        stars: 3,
        title: "Fake Title",
        description: "Fake Description",
        name: "Enzyme Sucks",
        date: "July 19 1993"
      },{
        stars: 3,
        title: "Fake Title",
        description: "Fake Description",
        name: "Enzyme Sucks",
        date: "July 19 1993"
      },{
        stars: 3,
        title: "Fake Title",
        description: "Fake Description",
        name: "Enzyme Sucks",
        date: "July 19 1993"
      },{
        stars: 3,
        title: "Fake Title",
        description: "Fake Description",
        name: "Enzyme Sucks",
        date: "July 19 1993"
      },{
        stars: 3,
        title: "Fake Title",
        description: "Fake Description",
        name: "Enzyme Sucks",
        date: "July 19 1993"
      },{
        stars: 3,
        title: "Fake Title",
        description: "Fake Description",
        name: "Enzyme Sucks",
        date: "July 19 1993"
      },{
        stars: 3,
        title: "Fake Title",
        description: "Fake Description",
        name: "Enzyme Sucks",
        date: "July 19 1993"
      },{
        stars: 3,
        title: "Fake Title",
        description: "Fake Description",
        name: "Enzyme Sucks",
        date: "July 19 1993"
      }]
    }
    const wrapper = shallow(<ReviewList {...props} />);
    expect(wrapper.find(Review)).toHaveLength(10);
  });


})