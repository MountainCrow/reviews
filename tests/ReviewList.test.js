/* eslint-disable */
const jsdom = require('./setupJSDOM.js');
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ReviewList from "../client/components/ReviewList.jsx";
import Review from "../client/components/Review.jsx";

describe('<ReviewList /> React Component Testing', () => {

  const data = [
    {
      _id: '5eecf082d6d4a623dcfe315e',
      product_id: 7,
      stars: 4,
      postDate: 'Dec 29th 2019',
      title: 'sint velit quas Practical',
      description: 'Provident repellendus ea nihil nihil provident et veniam aut. Et nesciunt omnis pariatur remvoluptas rerum assumenda rerum ratione. Deserunt occaecati velit est quis consectetur provident sapiente non.Qui rem sapiente quo eligendi illum qui id aperiam.',
      firstName: 'Jermaine',
      lastName: 'Crooks',
      productType: 'bag',
      __v: 0
    },
    {
      _id: '5eecf082d6d4a623dcfe315f',
      product_id: 8,
      stars: 5,
      postDate: 'Oct 2nd 2019',
      title: 'quia voluptas consequatur Handmade',
      description: 'Rem quo qui. Aspernatur praesentium optio totam rerum neque aliquam. Sed aut non ad est nonmolestiae debitis. Voluptas officiis asperiores non consectetur ad enim.',
      firstName: 'Daryl',
      lastName: 'Bartoletti',
      productType: 'bag',
      __v: 0
    },
    {
      _id: '5eecf082d6d4a623dcfe3160',
      product_id: 9,
      stars: 3,
      postDate: 'Oct 11th 2019',
      title: 'nesciunt omnis delectus Ergonomic',
      description: 'Qui fugiat et debitis qui molestiae quaerat omnis incidunt. Nihil qui odit quo ad magni ipsam iure dolorem eum. Sunt id laudantium doloremque. Sunt quis nesciunt voluptatem. Iusto cum voluptatem veniamautem ut omnis qui quas natus. Dolores et et repellendus quas quia.',
      firstName: 'Ciara',
      lastName: 'Witting',
      productType: 'bag',
      __v: 0
    },
    {
      _id: '5eecf082d6d4a623dcfe3161',
      product_id: 10,
      stars: 2,
      postDate: 'Aug 6th 2019',
      title: 'sit quod assumenda Generic',
      description: 'Sapiente autem sunt. Aut magnam culpa voluptatum vero sint vero repudiandae et. Laudantium voluptas dolor quos debitis. Cum rem quo quia libero aperiam explicabo in in aut. Ut non sit expedita.',
      firstName: 'Nico',
      lastName: 'Romaguera',
      productType: 'bag',
      __v: 0
    },
    {
      _id: '5eecf082d6d4a623dcfe315e',
      product_id: 7,
      stars: 4,
      postDate: 'Dec 29th 2019',
      title: 'sint velit quas Practical',
      description: 'Provident repellendus ea nihil nihil provident et veniam aut. Et nesciunt omnis pariatur remvoluptas rerum assumenda rerum ratione. Deserunt occaecati velit est quis consectetur provident sapiente non.Qui rem sapiente quo eligendi illum qui id aperiam.',
      firstName: 'Jermaine',
      lastName: 'Crooks',
      productType: 'bag',
      __v: 0
    },
    {
      _id: '5eecf082d6d4a623dcfe315f',
      product_id: 8,
      stars: 5,
      postDate: 'Oct 2nd 2019',
      title: 'quia voluptas consequatur Handmade',
      description: 'Rem quo qui. Aspernatur praesentium optio totam rerum neque aliquam. Sed aut non ad est nonmolestiae debitis. Voluptas officiis asperiores non consectetur ad enim.',
      firstName: 'Daryl',
      lastName: 'Bartoletti',
      productType: 'bag',
      __v: 0
    },
    {
      _id: '5eecf082d6d4a623dcfe3160',
      product_id: 9,
      stars: 3,
      postDate: 'Oct 11th 2019',
      title: 'nesciunt omnis delectus Ergonomic',
      description: 'Qui fugiat et debitis qui molestiae quaerat omnis incidunt. Nihil qui odit quo ad magni ipsam iure dolorem eum. Sunt id laudantium doloremque. Sunt quis nesciunt voluptatem. Iusto cum voluptatem veniamautem ut omnis qui quas natus. Dolores et et repellendus quas quia.',
      firstName: 'Ciara',
      lastName: 'Witting',
      productType: 'bag',
      __v: 0
    },
    {
      _id: '5eecf082d6d4a623dcfe3161',
      product_id: 10,
      stars: 2,
      postDate: 'Aug 6th 2019',
      title: 'sit quod assumenda Generic',
      description: 'Sapiente autem sunt. Aut magnam culpa voluptatum vero sint vero repudiandae et. Laudantium voluptas dolor quos debitis. Cum rem quo quia libero aperiam explicabo in in aut. Ut non sit expedita.',
      firstName: 'Nico',
      lastName: 'Romaguera',
      productType: 'bag',
      __v: 0
    }
  ];

  test('renders the review list to the dom', () => {
    const wrapper = shallow(<ReviewList />);
    expect(wrapper.find('#review-list')).toHaveLength(1);
  });


})