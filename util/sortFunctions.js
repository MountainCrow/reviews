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
    return sortedActivities;
  },

};

export default helpers;

