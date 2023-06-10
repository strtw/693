import React from 'react';

import React from 'react';

const EmployeeRow = ({ employee }) => {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.extension}</td>
      <td>{employee.email}</td>
      <td>{employee.title}</td>
      <td>{employee.dateHired.toDateString()}</td>
      <td>{employee.isEmployed ? 'Yes' : 'No'}</td>
    </tr>
  );
};

export default EmployeeRow;

