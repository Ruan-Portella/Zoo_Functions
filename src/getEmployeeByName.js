const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
 const employeesFirstName = data.employees.find((name) => name.firstName === employeeName)
 const employeesLastName = data.employees.find((name) => name.lastName === employeeName)

 
  if (employeesFirstName !== undefined) {
    return employeesFirstName
  } if (employeesLastName !== undefined) {
    return employeesLastName
  }  if (employeesFirstName === undefined || employeesLastName === undefined) {
    return {}
  }
};

module.exports = getEmployeeByName;
