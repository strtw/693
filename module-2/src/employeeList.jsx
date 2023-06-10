import React from 'react';
import EmployeeFilter from './employeeFilter';
import EmployeeTable from './employeeTable';
import EmployeeAd from './employeeAdd';


class EmployeeList extends React.Component {
    render() {
      return (
        <div>
          <h1>Employee Management Application</h1>
          <EmployeeFilter />
          <hr />
          <EmployeeTable />
          <hr />
          <EmployeeAd />
        </div>
      );
    }
  }

export default EmployeeList;