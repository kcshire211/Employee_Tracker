const Department = require("./Department");
const Role = require("./Role");
const Employee = require("./Employee");

const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const employeeTracker = [];

const initialPrompt = [
    {
        type: 'input',
        message: "what would you like to do?",
        name: "initial",
},
];



const addDepartment = [

    {
        type: 'input',
        message: "What is the name of the department?",
        name: "department",
},
];

const addRole = [

    {
        type: 'input',
        message: "What is the name of the role?",
        name: 'name',
},
    {
        type: 'input',
        message: "What is the salary of the role?",
        name: 'salary',
},
    {
        type: 'input',
        message: "Which department does the role belong to?",
        name: 'belong',
},
];

const addEmployee = [

    {
        type: 'input',
        message: "What is the emplyee's first name?",
        name: "first",
},
    {
        type: 'input',
        message: "What is the employees last name?",
        name: "last",
},
    {
        type: 'input',
        message: "What is the employee's role?",
        name: "emprole",
},
    {
        type: 'input',
        message: "Who is the employee's manager?",
        name: "manager",
},
];

const updateEmployee = [

    {
        type: 'list',
        message: "Which employee's role do you want to update?",
        name: 'update',
        choices: ["employee1","employee2", "employee3"],
},
];

//function to go through prompts
function dbPrompts(department) {
    if (department === "Add Department") {
        inquirer.prompt()
    }
}







//function to initialize the app
function init() {

    inquirer.prompt(addDepartment)
        .then((answers) => {
            console.log(answers);
            
        });
    inquirer.prompt(addRole)
        .then((answers) => {
            console.log(answers);
        });
    inquirer.prompt(addEmployee)
        .then((answers) => {
            console.log(answers);
        });
    inquirer.prompt(updateEmployee)
        .then((answers) => {
            console.log(answers);
        });
}


//calls the init function
init();