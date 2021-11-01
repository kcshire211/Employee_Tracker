
const connection = require("./connection");

//imports connection.js ^^. Runs the mysql commands into the findAll for emp, roles, depts, and adds/updates. 
class DB {
  constructor(connection) {
    this.connection = connection;
  }

  
  findAllEmployees() {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;"
      );
  }

  findAllRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT role.id, role.title, department.name AS Department, role.salary from role LEFT JOIN department ON role.department_id=department.id;"
      );
  }
  findAllDepartments() {
    return this.connection
      .promise()
      .query(
        "SELECT department.id, department.name AS Department FROM department;"
      );
  }
  addDepartment(addNewDpt) {
    console.log("hit the function!");
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", addNewDpt);
  }
  addRole(newRole) {
    console.log("hit the function!");
    return this.connection.promise().query("Insert into role SET ?", newRole);
  }
  addAnEmployee(employee) {
    console.log("hit the function!");
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  }
  updateEmployee() {
    return this.connection.promise().query("");
  }
}

module.exports = new DB(connection);