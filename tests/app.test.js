/* eslint-disable */

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from "../client/components/App.jsx";
// import ReviewHead from "../client/components/ReviewHead.jsx";
import ReviewList from "../client/components/ReviewList.jsx";
import ReviewHead from "../client/components/ReviewHead.jsx";


describe('<App /> React Component Testing', () => {

  test('App renders text to the dom',  () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toBe('Working')
  });

  test('renders the review list to the dom', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ReviewList)).toHaveLength(1);
  });

  test('renders the review list to the dom', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ReviewHead)).toHaveLength(1);
  });


})
