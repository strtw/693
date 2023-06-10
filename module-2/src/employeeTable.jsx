import React from 'react';
import EmployeeRow from './employeeRow';

const EmployeeTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Extension</th>
          <th>Email</th>
          <th>Title</th>
          <th>Date Hired</th>
          <th>Is Employed</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <EmployeeRow key={index} employee={employee} />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
