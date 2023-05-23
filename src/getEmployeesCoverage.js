const data = require('../data/zoo_data');

const loca = [];
const speci = [];

const object = (id) => {
  const employee = data.employees
    .find((na) => (na.firstName === id.name) || (na.lastName === id.name) || (na.id === id.id));
  for (let index = 0; index < employee.responsibleFor.length; index += 1) {
    const locations = data.species
      .find((animal) => animal.id === employee.responsibleFor[0]).location;
    console.log(locations);
    const species = data.species
      .find((animal) => animal.id === employee.responsibleFor[index]).name;
    loca.push(locations);
    speci.push(species);
  }
  const newobj = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: speci,
    locations: loca,
  }; return newobj;
};

const seila = () => {
  const array = []; const employee2 = data.employees;
  for (let index = 0; index < employee2.length; index += 1) {
    const employee = data.employees
      .find((na) => (na.id === employee2[index].id));
    const newobj = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: 0,
      locations: 0,
    }; array.push(newobj);
    const locations = employee.responsibleFor
      .map((e) => data.species.find((specie) => specie.id === e).location);
    const species2 = employee.responsibleFor
      .map((e) => data.species.find((specie) => specie.id === e).name);
    newobj.species = species2; newobj.locations = locations;
  } return array;
};

const getEmployeesCoverage = (id) => {
  if (!id) {
    return seila();
  }
  const employee = data.employees
    .find((na) => (na.firstName === id.name) || (na.lastName === id.name) || (na.id === id.id));
  loca.length = 0;
  speci.length = 0;
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  return object(employee);
};

console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

module.exports = getEmployeesCoverage;
