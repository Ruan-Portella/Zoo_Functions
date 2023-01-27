// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const species = data.species.filter((pets) => ids.find((id) => pets.id === id));
  return species;
};
module.exports = getSpeciesByIds;
