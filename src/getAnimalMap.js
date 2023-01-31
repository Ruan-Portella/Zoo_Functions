const data = require('../data/zoo_data');

const includeNames = () => {
  const newobj = data.species.reduce((acc, specie) => {
    const nome = { [specie.name]: specie.residents.map((animal2) => animal2.name) };
    if (!acc[specie.location]) {
      acc[specie.location] = [nome];
    } else {
      acc[specie.location].push(nome);
    }
    return acc;
  }, {});
  return newobj;
};

const sorted = () => {
  const newobj2 = data.species.reduce((acc, specie) => {
    const nome = { [specie.name]: specie.residents.map((animal2) => animal2.name).sort() };
    if (!acc[specie.location]) {
      acc[specie.location] = [nome];
    } else {
      acc[specie.location].push(nome);
    }
    return acc;
  }, {});
  return newobj2;
};

const noParameter = () => {
  const newobj = data.species.reduce((acc, specie) => {
    acc[specie.location] = [];
    data.species.forEach((animal) => {
      if (animal.location === specie.location) {
        acc[specie.location].push(animal.name);
      }
    });
    return acc;
  }, {});
  return newobj;
};

const sex = (options) => {
  const newobj2 = data.species.reduce((acc, specie) => {
    const nome = { [specie.name]: specie.residents.filter((animal) => animal.sex === options.sex)
      .map((animal2) => animal2.name) };
    if (!acc[specie.location]) {
      acc[specie.location] = [nome];
    } else {
      acc[specie.location].push(nome);
    }
    return acc;
  }, {});
  return newobj2;
};

const all = (options) => {
  const newobj2 = data.species.reduce((acc, specie) => {
    const nome = { [specie.name]: specie.residents.filter((animal) => animal.sex === options.sex)
      .map((animal2) => animal2.name).sort() };
    if (!acc[specie.location]) {
      acc[specie.location] = [nome];
    } else {
      acc[specie.location].push(nome);
    }
    return acc;
  }, {});
  return newobj2;
};

const contional1to3 = (options) => {
  if (!options || !options.includeNames) {
    return noParameter();
  }
};

const conditinal4 = (options) => {
  if (options.sorted === undefined && options.sex === undefined) {
    return includeNames();
  }
};

const getAnimalMap = (options) => {
  if (contional1to3(options)) {
    return noParameter();
  } if (conditinal4(options)) {
    return includeNames();
  } if (options.sex === undefined) {
    return sorted();
  } if (options.sorted === undefined) {
    return sex(options);
  }
  return all(options);
};

module.exports = getAnimalMap;
