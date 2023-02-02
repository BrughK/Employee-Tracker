const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

// Connect SQL
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Iamroot',
      database: 'employee_db'
    }
);

const mainMenu = [
    {
        type: 'list',
        message: "What would you like to do?",
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
        name: 'choice'
    }
]

const departmentQ = [
    {
        type: 'input', 
        message: 'What is the new department name?',
        name: 'newDepartment', 
    },
]

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