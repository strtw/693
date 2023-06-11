import React from "react";

class EmployeeEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      employee: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const id = window.location.href.split("/")[5];
    fetch(`/api/employees/${id}`)
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            data.employee.dateHired = new Date(data.employee.dateHired);
            this.setState({ employee: data.employee });
          });
        } else {
          response.json().then((error) => {
            alert(`Failed to fetch employee: ${error.message}`);
          });
        }
      })
      .catch((err) => {
        alert(`Error in fetching data from server: ${err.message}`);
      });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      employee: {
        ...prevState.employee,
        [name]: value,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.employeeUpdate;
    const employee = {
        _id: form._id.value,
        name: form.name.value,
        extension: form.extension.value,
        email: form.email.value,
        title: form.title.value,
        dateHired: new Date(form.dateHired.value),
        currentlyEmployed: form.currentlyEmployed.value,
    };
    const { employee: oldEmployee } = this.state;
    const id = oldEmployee._id;
    fetch(`/api/employees/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee),
    })
  }

  render() {
    const { employee } = this.state;
    if (!employee) {
      return <div>Loading employee data...</div>;
    }
    return (
      <form name="employeeUpdate" onSubmit={this.handleSubmit}>
        <h1>Edit {employee.name}</h1>
        ID:
        <br />
        <input type="text" name="_id" value={employee._id} readOnly />
        <br />
        Name:
        <br />
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={this.handleChange}
        />
        <br />
        Extension:
        <br />
        <input
          type="text"
          name="extension"
          value={employee.extension}
          onChange={this.handleChange}
        />
        <br />
        Email:
        <br />
        <input
          type="text"
          name="email"
          value={employee.email}
          onChange={this.handleChange}
        />
        <br />
        Title:
        <br />
        <input
          type="text"
          name="title"
          value={employee.title}
          onChange={this.handleChange}
        />
        <br />
        Date Hired:
        <br />
        <input
          type="text"
          name="dateHired"
          value={employee.dateHired}
          readOnly
        />
        <br />
        Currently Employed:
        <br />
        <input
          type="text"
          name="currentlyEmployed"
          value={employee.currentlyEmployed}
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default EmployeeEdit;
