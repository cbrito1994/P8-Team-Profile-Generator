const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Enter the team manager’s name',
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'Enter the team manager’s employee ID',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the team manager’s email address',
    },
    {
        type: 'input',
        name: 'number',
        message: 'Enter the team manager’s office number',
    },
    {
        type: 'checkbox',
        message: 'Please add an engineer or an intern or choose to finish building my team',
        name: 'license',
        choices: ['Engineer', 'Intern', 'Finish up'],
    }
];