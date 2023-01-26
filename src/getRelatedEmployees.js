const data = require('../data/zoo_data');

const isManager = (id) => {
 const manager = data.employees.some((ID) => ID.managers.includes(id));
 return manager
};


const getRelatedEmployees = (managerId) => {
  const managers = [];
  if (isManager(managerId) === true) {
    const managers2 = data.employees.forEach((manage) => {
      if (manage.managers.includes(managerId)) {
        managers.push(`${manage.firstName} ${manage.lastName}`);
      }
    });
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return managers
}; 


module.exports = { isManager, getRelatedEmployees };
