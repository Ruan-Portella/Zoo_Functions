const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animals = data.species.find((animals) => animals.name === animal)
  const ages = animals.residents.every((ages) => ages.age >= age)
  return ages
};
getAnimalsOlderThan('otters', '7')
module.exports = getAnimalsOlderThan;
