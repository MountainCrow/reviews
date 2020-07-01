import moment from 'moment';

moment().format();

const helpers = {

  lowestRated: (arr) => {
    function compare(x, y) {
      let comparison = 0;
      const xlol = x.stars;
      const ylol = y.stars;
      if (xlol > ylol) {
        comparison = 1;
      } else if (ylol > xlol) {
        comparison = -1;
      }
      return comparison;
    }
    return arr.sort(compare);
  },

  highestRated: (arr) => {
    function compare(x, y) {
      let comparison = 0;
      const xlol = x.stars;
      const ylol = y.stars;
      if (xlol > ylol) {
        comparison = 1 * -1;
      } else if (ylol > xlol) {
        comparison = -1 * -1;
      }
      return comparison;
    }
    return arr.sort(compare);
  },

  mostRecent: (arr) => {
    const sortedActivities = arr.slice().sort((a, b) => {
      a = new Date(a.postDate);
      b = new Date(b.postDate);
      return b - a;
    });
    console.log(sortedActivities);
    return sortedActivities;
  },

};

export default helpers;


// {
//   _id: '5eecf082d6d4a623dcfe315e',
//   product_id: 7,
//   stars: 4,
//   postDate: 'Dec 29th 2019',
//   title: 'sint velit quas Practical',
//   description: 'Provident repellendus ea nihil nihil provident et veniam aut. Et nesciunt omnis pariatur remvoluptas rerum assumenda rerum ratione. Deserunt occaecati velit est quis consectetur provident sapiente non. Qui rem sapiente quo eligendi illum qui id aperiam.',
//   firstName: 'Jermaine',
//   lastName: 'Crooks',
//   productType: 'bag',
//   __v: 0
// }