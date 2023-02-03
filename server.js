const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
require('dotenv').config();

// Connect SQL
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',//process.env.DB_USER,
      password: 'Iamroot',//process.env.DB_USER,
      database: 'employee_db' //process.env.DB_NAME
    }
);

// main questions
const mainMenu = [
    {
        type: 'list',
        message: "What would you like to do?",
        choices: ["View departments", "View roles", "View employees", "Add a new department", "Add a new role", "Add a new employee", "Update an employee's job title"],
        name: 'choice'
    }
]
// department questions
const departmentQ = [
    {
        type: 'input', 
        message: 'What is the new department name?',
        name: 'newDepartment', 
    },
]
// role questions
const roleQ = [
    {
        type: 'input', 
        message: 'What is the title of this new role?',
        name: 'roleTitle',
    },
    {
        type: 'input', 
        message: 'What is the salary?',
        name: 'roleSalary'
    },
    {
        type: 'list',
        message: 'What is the department ID of this new role?',
        choices: ['001', '002', '003', '004', '005', '006', '007', '008'],
        name: 'deptId'
    },
]
// employee questions
const employeeQ = [
    {
        type: 'input',
        message: "What is the employee's first name?",
        name: 'firstName',
    },
    {
        type: 'input',
        message: "What is the employee's last name?",
        name: 'lastName',
    },
    {
        type: 'input',
        message: "What is the employee's job title?",
        name: 'jobTitle',
    },
    {
        type: 'input',
        message: "What is the employee's manager ID?",
        name: 'managerId',
    },
    {
        type: 'list',
        message: 'What is the role ID of this new employee',
        choices: ['001', '002', '003', '004', '005', '006', '007', '008'],
        name: 'roleId'
    },
]
// update questions
const updateQ = [
    {
        type: 'input', 
        message: "What is the employee's ID number?",
        name: 'idNumber'
    },
    {
        type: 'input', 
        message: "What is the employee's new job title?",
        name: 'updateTitle'
    }
]

// run this function to start the "loop"
const firstQuestion = () => {
    return inquirer
    // propmt the main questions then get the choices
    .prompt(mainMenu).then((data) => {
        // switch case for the choices
        switch (data.choice){
            case 'Add a new department':
                addDepartment();
                break;
            case 'Add a new role':
                addRole();
                break;
            case 'Add a new employee':
                addEmployee();
                break;
            case "Update an employee's job title":
                updateTitle(); 
                break;
            // show the departments table
            case 'View departments':
                db.query(`SELECT * FROM department`, function (err,results) {
                    console.table(results); 
                    firstQuestion();
                }); 
                break;
            // show the row table
            case 'View roles':
                db.query(`SELECT * FROM role`, function (err,results) {
                    console.table(results); 
                    firstQuestion(); 
                });
                break;
            // show the employees table
            case 'View employees':
                db.query(`SELECT * FROM employee`, function (err,results) {
                    console.table(results); 
                    firstQuestion(); 
                });
                break;
        }
    })
}

// query for department the rest are kinda just rinse and repeat with different vars
const addDepartment = () => {
    return inquirer
    .prompt(departmentQ).then((data) => {
        db.query(`INSERT INTO department(department_name) VALUES ("${data.newDepartment}")`, (err, result) => {
            err
                ? console.log(err)
                : console.log(`${data.newDepartment} has been added to database`)
        });
        firstQuestion();
    })
}   

const addRole = () => {
    return inquirer
    .prompt(roleQ).then((data) => {
        db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${data.roleTitle}", "${data.roleSalary}", "${data.deptId}")`, (err, result) => {
            err
                ? console.log(err)
                : console.log(`${data.roleTitle} has been added to database`)
        });
        firstQuestion();
    })
}

const addEmployee = () => {
    return inquirer
    .prompt(employeeQ).then((data) => {
        db.query(`INSERT INTO employee (first_name, last_name, job_title, role_id, manager_id) VALUES ("${data.firstName}", "${data.lastName}", "${data.jobTitle}", "${data.roleId}", "${data.managerId}")`, (err, result) => {
            err
                ? console.log(err)
                : console.log(`${data.firstName} ${data.lastName} has been added to database`)
        });
        firstQuestion();
    })
}

// also broken?
// jk it works lol
const updateTitle = () => {
    return inquirer
    .prompt(updateQ).then((data) => {
        db.query(`UPDATE employee SET job_title = "${data.updateTitle}" WHERE id = "${data.idNumber}"`, (err, result) => {
            err
                ? console.log(err)
                : console.log(`The new title ${data.updateTitle} has been added to database`)
        });
        firstQuestion();
    })
}

// init
firstQuestion();