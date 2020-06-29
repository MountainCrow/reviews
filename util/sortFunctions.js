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

};

export default helpers;
