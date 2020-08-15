const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  const velues = Object.values(employees);
  const keys = Object.keys(employees);
  let bestEmployee = '';
  let bestEmployeeVelue = Math.max(...velues);

  for (const key of keys) {
    if (employees[key] === bestEmployeeVelue) {
      bestEmployee = key;
    }
  }

  return bestEmployee;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
