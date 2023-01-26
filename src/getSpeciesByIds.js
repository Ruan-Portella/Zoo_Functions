// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (id1, id2) => {
  const speciesId = data.species.find((identify) => identify.id === id1);
  const speciesId2 = data.species.find((identify2) => identify2.id === id2);

  if (speciesId === undefined) {
    return [];
  } if (speciesId !== undefined && speciesId2 === undefined) {
    return [speciesId];
  }
  return [speciesId, speciesId2];
};
module.exports = getSpeciesByIds;
