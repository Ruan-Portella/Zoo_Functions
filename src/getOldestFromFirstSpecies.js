const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const getIdType = data.employees.find((employee) => employee.id === id);
  const newd = data.species.find((animal) => animal.id === getIdType.responsibleFor[0]).residents
    .reduce((acc, curr) => {
      if (acc.age > curr.age) {
        return acc;
      }
      return curr;
    }, 0);
  return Object.values(newd);
};

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
