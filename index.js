const fs = require('fs');
const inquirer = require('inquirer');
const db = require("./db");
const { updateEmployee } = require("./db");
require("console.table");

const initialPrompt = [
    {
        type: 'list',
        message: "what would you like to do?",
        name: "initial",
        choices: [
            "View Departments",
            "View Roles",
            "View Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update employee role",
            "Exit",
        ],
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
function init() {
 inquirer.prompt(initialPrompt).then((res) => {
     console.log(res.initial);
    switch (res.initial) {
        case "View Employees":
            viewEmployees();
            break;
        case "View Departments":
            viewDepartments();
            break;
        case "View Roles":
            viewRoles();
            break;
        case "Add Employee":
            addEmployee();
            break;
        case "Add Role":
            addRole();
             break;
        case "Add Department":
            addDepartment();
            break;
        case "Update employee role":
            updateEmployee();
            break;

        default:
            process.exit();
    }
 });
 
};


function viewEmployees() {
    db.findAllEmployees()
        .then(([data]) => {
            console.table(data);
        })
        .then(() => {
            init();
        });
}

function viewDepartments() {
    db.findAllDepartments()
        .then(([data]) => {
            console.table(data);
        })
        .then(() => {
            init();
        });
}

function viewRoles() {
    db.findAllRoles()
        .then(([data]) => {
            console.table(data);
        })
        .then(() => {
            init();
        });
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "first_name",
                message: "What is the employee's first name?"
            },
            {
                type: "input",
                name: "last_name",
                message: "What is the employee's last name?"
            },
        ])
        .then((res) => {
            let firstname = res.first_name;
            let lastname = res.last_name;
            console.log(firstname);
            console.log(lastname);

            db.findAllRoles().then(([data]) => {
                const roleChoices = data.map(({ id, title }) => ({
                    name: title,
                    value: id,
                }));

            inquirer
                .prompt([
                    {
                        type: "list",
                        name: "roleId",
                        message: "What is the employee's role?",
                        choices: roleChoices,
                    },
                ]) 
                .then((res) => {
                    let newEmpRoleId = res.roleId;
                    console.log(newEmpRoleId);
                    db.findAllEmployees().then(([data]) => {
                        console.log(data);
                        const newEmpManager = data.map (
                            ({ id, first_name, last_name}) => ({
                                name: first_name.concat(" ", last_name),
                                value: id,
                            })
                        );
                    console.log(newEmpManager);
                    inquirer
                        .prompt([
                            {
                                type: "list",
                                name: "managerOption",
                                message: "Who is this employee's manager?",
                                choices: newEmpManager,
                            },
                        ])
                        .then((Res) => {
                            let empManager = res.managerOption;
                            console.log(empManager);
                            const employee = {
                                first_name: firstname,
                                last_name: lastname,
                                role_id: newEmpRoleId,
                                manager_id: empManager,
                            };
                        })

                    })
                })   
            })
        })
}