const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (id1, id2) => {
  const speciesId = data.species.find((identify) => identify.id === id1);
  const speciesId2 = data.species.find((identify2) => identify2.id === id2);
  
  if(speciesId === undefined){
    return [];
  } if (speciesId !== undefined && speciesId2 === undefined){
    return [speciesId];
} else {
  return [speciesId, speciesId2];
}
}
// const getSpeciesByIds = (ids) => {
//   const speciesId = data.species.find((identify) => identify.id === ids);
//   if (ids === undefined) {
//     return [];
//   } if (ids.length <= 36) {
//     return [speciesId]
//   } if (ids.length >= 37) {
//     const speciesId2 = species.id === ids
//     return [speciesId2]
//   } 
// }

module.exports = getSpeciesByIds;

