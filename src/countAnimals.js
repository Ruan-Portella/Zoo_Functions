const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const pets = data.species.find((pet) => pet);
  return pets;
};

module.exports = countAnimals;
