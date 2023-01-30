const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    const totalSpecies = data.species.reduce((acc, curr) =>
      ({ ...acc, [curr.name]: curr.residents.length }), {});
    return totalSpecies;
  }

  if (animal.sex === undefined) {
    const specie = data.species.filter((pet) =>
      pet.name === animal.species).map((resident) => resident.residents.length)[0];
    return specie;
  }

  if (animal.sex !== undefined && animal !== undefined) {
    const speciesAndSex = data.species.filter((pet) =>
      pet.name === animal.species).map((resident) =>
      resident.residents.filter((sexo) => sexo.sex === animal.sex).length)[0];
    return speciesAndSex;
  }
};
module.exports = countAnimals;
