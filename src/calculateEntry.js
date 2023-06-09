const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  if (entrants !== undefined) {
    const child1 = entrants.filter((entrant) => entrant.age < 18).length;
    const adult1 = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
    const senior1 = entrants.filter((entrant) => entrant.age >= 50).length;
    return { child: child1, adult: adult1, senior: senior1 };
  }
  if (entrants === undefined) {
    throw new Error('Numero de Pessoas errado!');
  }
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  if (Object.values(entrants).length >= 1 || entrants) {
    const childPrices = data.prices.child;
    const adultPrices = data.prices.adult;
    const seniorPrices = data.prices.senior;
    const child = countEntrants(entrants).child * childPrices;
    const adult = countEntrants(entrants).adult * adultPrices;
    const senior = countEntrants(entrants).senior * seniorPrices;

    return child + adult + senior;
  }
};

module.exports = { calculateEntry, countEntrants };
