const data = require('../data/zoo_data');

const week = {
  Tuesday: {},
  Wednesday: {},
  Thursday: {},
  Friday: {},
  Saturday: {},
  Sunday: {},
  Monday: {},
};

const generos = Object.keys(week);

for (let index = 0; index < generos.length - 1; index += 1) {
  week[generos[index]].officeHour = `Open from ${data.hours[generos[index]]
    .open}am until ${data.hours[generos[index]].close}pm`;
  week[generos[index]].exhibition = [];

  data.species.forEach((specie) => {
    if (specie.availability.includes(generos[index])) {
      week[generos[index]].exhibition.push(specie.name);
    }
  });
  week.Monday.officeHour = 'CLOSED';
  week.Monday.exhibition = 'The zoo will be closed!';
}

console.log(week);

const getSchedule = (scheduleTarget) => {
  for (let index = 0; index < generos.length; index += 1) {
    if (generos[index] === scheduleTarget) {
      const obj = {};
      obj[scheduleTarget] = week[scheduleTarget];
      return obj;
    }
  }
  if (!scheduleTarget) {
    return week;
  }
  const getSche = data.species.find((specie) =>
    specie.name === scheduleTarget);
  if (getSche === undefined) {
    return week;
  }
  return getSche.availability;
};

module.exports = getSchedule;
