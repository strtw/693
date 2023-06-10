import EmployeeFilter from './EmployeeFilter.jsx'
import EmployeeAdd from './EmployeeAdd.jsx'
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function EmployeeTable({ employees, deleteEmployee }) {
  const employeeRows = employees.map((employee, index) => (
    <EmployeeRow
      key={employee._id}
      employee={employee}
      deleteEmployee={deleteEmployee}
      isEvenRow={index % 2 === 0}
    />
  ));

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Extension</th>
          <th>Email</th>
          <th>Title</th>
          <th>Date Hired</th>
          <th>Currently Employed?</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{employeeRows}</tbody>
    </table>
  );
}

function EmployeeRow({ deleteEmployee, employee }) {
  const [modalVisible, setModalVisible] = useState(false);

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  function onDeleteClick() {
    deleteEmployee(employee._id);
    toggleModal();
  }

  return (
    <tr>
      <td className="align-middle">{employee.name}</td>
      <td className="align-middle">{employee.extension}</td>
      <td className="align-middle">{employee.email}</td>
      <td className="align-middle">{employee.title}</td>
      <td className="align-middle">{employee.dateHired.toDateString()}</td>
      <td className="align-middle">{employee.currentlyEmployed ? 'Yes' : 'No'}</td>
      <td className="align-middle">
        <div className="d-flex gap-2">
          <Button variant="danger" onClick={toggleModal}>
            Delete Emp
          </Button>
        </div>
        <Modal show={modalVisible} onHide={toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this employee?
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal} className="btn-danger">
              No
            </Button>
            <Button variant="success" onClick={onDeleteClick}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </td>
    </tr>
  );
}


export default class EmployeeList extends React.Component {
    constructor() {
        super()
        this.state = { employees: [] }
        this.createEmployee = this.createEmployee.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)
    }
    componentDidMount() {
        this.loadData()
    }
    loadData() {
        fetch('/api/employees')
        .then(response => response.json())
        .then(data => {
            console.log('Total count of employees:', data.count)
            data.employees.forEach(employee => {
                employee.dateHired = new Date(employee.dateHired)
            })
            this.setState({ employees: data.employees })
        })
        .catch(err => {console.log(err)})
    }
    createEmployee(employee) {
        fetch('/api/employees', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(employee),
        })
        .then(response => response.json())
        .then(newEmployee => {
            newEmployee.employee.dateHired = new Date(newEmployee.employee.dateHired)
            const newEmployees = this.state.employees.concat(newEmployee.employee)
            this.setState({ employees: newEmployees })
            console.log('Total count of employees:', newEmployees.length)
        })
        .catch(err => {console.log(err)})
    }
    deleteEmployee(id) {
        fetch(`/api/employees/${id}`, { method: 'DELETE' })
        .then(response => {
            if (!response.ok) {
                console.log('Failed to delete employee.')
            } else {
                this.loadData()
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                <h1>Employee Management Application</h1>
                <EmployeeFilter />
                <hr />
                <EmployeeTable employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
                <hr /> 
                <EmployeeAdd createEmployee={this.createEmployee} />
            </React.Fragment>
        )
    }
}