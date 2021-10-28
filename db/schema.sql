-- creates employees_db database, first drops it if once already exists of same name
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

DROP TABLE IF EXISTS department; 
CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30) -- to hold department name
);

DROP TABLE IF EXISTS role; 
CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30), -- to hold role title
    salary DECIMAL, -- to hold role salary
    department_id INT -- to hold reference to department role belongs to
);

DROP TABLE IF EXISTS employee; 
CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30), -- to hold employee first name
    last_name VARCHAR(30), -- to hold employee last name
    role_id INT, -- to hold reference to employee role
    manager_id INT -- to hold reference to another employee that is the manager of current employee (NULL if employee has no manager)
);