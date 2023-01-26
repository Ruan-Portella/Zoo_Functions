const data = require('../data/zoo_data');

const isManager = (id) => {
  const manager = data.employees.some((ID) => ID.managers.includes(id));
  return manager;
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === true) {
    const manager2 = data.employees.filter((managerI) =>
      (managerI.managers.includes(managerId))).map((managers) =>
      (`${managers.firstName} ${managers.lastName}`));
    return manager2;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
