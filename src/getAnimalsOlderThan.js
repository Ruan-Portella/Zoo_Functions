const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animals2 = data.species.find((animals) => animals.name === animal);
  const age1 = animals2.residents.every((age2) => age2.age >= age);
  return age1;
};
getAnimalsOlderThan('otters', '7');
module.exports = getAnimalsOlderThan;
