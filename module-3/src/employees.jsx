const employees = [
  {
    id: 1,
    name: "Michael Scott",
    ext: 1124,
    email: "michael@example.com",
    title: "Regional Manager",
    dateHired: new Date("2018-08-15"),
    isEmployed: true,
  },
  {
    id: 2,
    name: "Pam Beesly",
    ext: 1125,
    email: "pam@example.com",
    title: "Receptionist",
    dateHired: new Date("2018-08-22"),
    isEmployed: true,
  },
];

function EmployeeTable({employees}){
    const employeeRows = employees.map((employee) => (
      <EmployeeRow key={employee.id} employee={employee} />
    ));

    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Extension</th>
            <th>Email</th>
            <th>Title</th>
            <th>Date Hired</th>
            <th>Currently Employed?</th>
          </tr>
        </thead>
        <tbody>{employeeRows}</tbody>
      </table>
    );
  }


const EmployeeFilter = () => {
  return <div>{/* Placeholder */}</div>;
};

const EmployeeRow = ({ employee }) => {
  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.ext}</td>
      <td>{employee.email}</td>
      <td>{employee.title}</td>
      <td>{employee.dateHired.toDateString()}</td>
      <td>{employee.isEmployed ? "yes" : "no"}</td>
    </tr>
  );
};

class EmployeeAdd extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, ext, email, title } = document.forms[0];
    const employee = {
      name: name.value,
      ext: ext.value,
      email: email.value,
      title: title.value,
      dateHired: new Date(),
      isEmployed: true,
    };
    this.props.createEmployee(employee);
    name.value = "";
    ext.value = "";
    email.value = "";
    title.value = "";
  };

  render() {
    return (
      <form name="employeeAdd" onSubmit={this.handleSubmit}>
        Name: <input type="text" name="name" />
        <br />
        Extension: <input type="text" name="ext" />
        <br />
        Email: <input type="text" name="email" />
        <br />
        Title: <input type="text" name="title" />
        <br />
        <button>Add</button>
      </form>
    );
  }
}

class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ employees });
    }, 500);
  }

  createEmployee = (employee) => {
    employee.id = this.state.employees.length + 1;
    const newEmployeeList = [...this.state.employees, employee];
    this.setState({ employees: newEmployeeList });
  };

  render() {
    const { employees } = this.state;

    return (
      <React.Fragment>
        <h1>Employee Management Application</h1>
        <EmployeeFilter />
        <hr />
        <EmployeeTable employees={employees} />
        <hr />
        <EmployeeAdd createEmployee={this.createEmployee} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <EmployeeList />
  </React.StrictMode>,
  document.getElementById("content")
);
