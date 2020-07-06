/* eslint-disable */

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Review from "../client/components/Review.jsx";

describe('<Review /> React Component Testing', () => {
  const props = {
    allReviews: {
      stars: 3,
      title: "Fake Title",
      description: "Fake Description",
      firstName: "Enzyme",
      lastName: "Sucks",
      date: "July 19 1993"
    }
  }
  test('renders the review to the dom', () => {
    const wrapper = shallow(<Review {...props} />);
    expect(wrapper.find('.indiv-review')).toHaveLength(1);
  });


})