import React, { useState } from "react";
import EmployeeFilter from "./EmployeeFilter.jsx";
import EmployeeAdd from "./EmployeeAdd.jsx";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

function EmployeeTable(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteEmployeeId, setDeleteEmployeeId] = useState("");

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  function onDeleteClick(employeeId) {
    setDeleteEmployeeId(employeeId);
    toggleModal();
  }

  function onDeleteConfirm() {
    props.deleteEmployee(deleteEmployeeId);
    toggleModal();
  }

  const employeeRows = props.employees.map((employee) => (
    <EmployeeRow
      key={employee._id}
      employee={employee}
      onDeleteClick={onDeleteClick}
    />
  ));

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Edit</th>
          <th>Name</th>
          <th>Extension</th>
          <th>Email</th>
          <th>Title</th>
          <th>Date Hired</th>
          <th>Currently Employed?</th>
          <th>Delete</th>
          <td className="align-middle">
            <Modal show={modalVisible} onHide={toggleModal}>
              <Modal.Header closeButton>
                <Modal.Title>Delete Employee</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to delete this employee?
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={toggleModal}
                  className="btn-danger"
                >
                  No
                </Button>
                <Button variant="success" onClick={onDeleteConfirm}>
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
          </td>
        </tr>
      </thead>
      <tbody>{employeeRows}</tbody>
    </table>
  );
}

function EmployeeRow(props) {
  return (
    <tr>
      <td>
        <Link to={`/edit/${props.employee._id}`}>Edit</Link>
      </td>
      <td>{props.employee.name}</td>
      <td>{props.employee.extension}</td>
      <td>{props.employee.email}</td>
      <td>{props.employee.title}</td>
      <td>{props.employee.dateHired.toDateString()}</td>
      <td>{props.employee.currentlyEmployed ? "Yes" : "No"}</td>
      <td>
        <button onClick={() => props.onDeleteClick(props.employee._id)}>
          DELETE
        </button>
      </td>
    </tr>
  );
}

export default class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = { employees: [] };
    this.createEmployee = this.createEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch("/api/employees")
      .then((response) => response.json())
      .then((data) => {
        console.log("Total count of employees:", data.count);
        data.employees.forEach((employee) => {
          employee.dateHired = new Date(employee.dateHired);
        });
        this.setState({ employees: data.employees });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleFilterChange(e) {
    const { value } = e.target;
    console.log(this.state.employees, e.target.value);
    const filtered = this.state.employees.filter(
      (employee) => employee.currentlyEmployed === value
    );
    this.setState(filtered);
  }

  createEmployee(employee) {
    fetch("/api/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    })
      .then((response) => response.json())
      .then((newEmployee) => {
        newEmployee.employee.dateHired = new Date(
          newEmployee.employee.dateHired
        );
        const newEmployees = this.state.employees.concat(newEmployee.employee);
        this.setState({ employees: newEmployees });
        console.log("Total count of employees:", newEmployees.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteEmployee(id) {
    fetch(`/api/employees/${id}`, { method: "DELETE" }).then((response) => {
      if (!response.ok) {
        console.log("Failed to delete employee.");
      } else {
        this.loadData();
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Employee Management Application</h1>
        <EmployeeFilter handleFilterChange={this.handleFilterChange} />
        <hr />
        <EmployeeTable
          employees={this.state.employees}
          deleteEmployee={this.deleteEmployee}
        />
        <hr />
        <EmployeeAdd createEmployee={this.createEmployee} />
      </React.Fragment>
    );
  }
}
