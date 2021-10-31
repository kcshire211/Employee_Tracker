-- creates employees_db database, first drops it if once already exists of same name
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

DROP TABLE IF EXISTS department; 
CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL-- to hold department name, can't be empty/null
);

DROP TABLE IF EXISTS role; 
CREATE TABLE role (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL, -- to hold role title
    salary DECIMAL NOT NULL UNSIGNED, -- to hold role salary
    department_id INT UNSIGNED NOT NULL -- to hold reference to department role belongs to
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE -- if department id is deleted, roles, employees under that department also deleted
);

DROP TABLE IF EXISTS employee;  
CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, -- to hold employee first name
    last_name VARCHAR(30) NOT NULL, -- to hold employee last name
    role_id INT UNSIGNED NOT NULL, -- to hold reference to employee role
    INDEX role_ind(role_id),
    CONSTRAINT fk_role FOREIGN KEY,
    (role_id) REFERENCES role (id),
    ON DELETE CASCADE,
    manager_id INT UNSIGNED,
    INDEX man_ind(manager_id),
    CONSTRAINT fk_manager FOREIGN KEY(manager_id) REFERENCES employee(id)
    ON DELETE SET NULL
);