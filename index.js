const Manager = require('./library/manager');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');
const generateHTML = require('./generateHtml');
const inquirer = require('inquirer');
const fs = require('fs');

const teamMember = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Enter the team manager’s name',
        validate: (input) => input !== '' ? true : "Please, enter a name"
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the team manager’s employee ID',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the team manager’s email address',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the team manager’s office number',
    }
]

const engineerQuestions = [
    {
      type: 'input',
      name: 'engineerName',
      message: 'What´s the employee´s name?',
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'What´s the employee´s email?',
    },
    {
      type: 'input',
      name: 'engineerId',
      message: 'What´s the employee´s ID?'
    },
    {
    type: 'input',
    name: 'gitHub',
    message: 'What´s the engineer gitHub username?'
    }
];

const intenrQuestions = [
    {
      type: 'input',
      name: 'internName',
      message: 'What´s the employee´s name?',
    },
    {
      type: 'input',
      name: 'internEmail',
      message: 'What´s the employee´s email?',
    },
    {
      type: 'input',
      name: 'internId',
      message: 'What´s the employee´s ID?'
    },
    {
    type: 'input',
    name: 'school',
    message: 'What´s the intern school?'
}]
  
const start = () => {
    const createManager = () => {
        inquirer.prompt(managerQuestions).then(answers => {
            const manager = new Manager(answers.managerName, answers.id, answers.email, answers.officeNumber);
            teamMember.push(manager);
            inquirer.prompt([
                {
                    type: 'list',
                    message: 'Please add an engineer or an intern or choose to finish building the team',
                    name: 'employee',
                    choices: ['Engineer', 'Intern', 'Finish up'],
                }
            ]).then(answers => {
                if(answers.role === 'Engineer'){
                    inquirer.prompt(engineerQuestions).then((answers) => {
                        const engineer = new Engineer(answers.engineerName, answers.engineerEmail, answers.engineerId, answers.githubUsername);
                        teamMember.push(engineer);
                    })
                }
                if(answers.role === 'Intern'){
                    inquirer.prompt(intenrQuestions).then((answers) => {
                        const intern = new Intern(answers.internName, answers.internEmail, answers.internId, answers.internSchool);
                        teamMember.push(intern);
                    })
                }
                if(answers.role === 'Finish up'){
                    const generateHtml = generateHTML.generateHTML(teamMember);
                    fs.writeFile('index.html', generateHtml, err =>
                        err ? console.log(err) : console.log("Successfully created the HTML file!")
                    )
                }
            })
        }); 
    }
    createManager();
}

start();