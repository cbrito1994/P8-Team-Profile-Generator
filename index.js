const Manager = require('./library/manager');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')

const teamMember = [];
const arrayId = [];

const outputDirectory = path.resolve(__dirname, "public")
const outputPath = path.join(outputDirectory, "index.html");

const render = require("./template/htmlTemplate.js");

const startApp = () => {
    const createManager = () => {
        console.log("Please build your team");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's id?",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email?",
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?",
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMember.push(manager);
            arrayId.push(answers.managerId);
            createTeam();
        });
    }
  
    const createTeam = () => {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Which type of team member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                ]
            }
        ]).then(answer => {
            switch (answer.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
            }
        });
    }
  
    const addEngineer = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's id?",
                validate: answer => {
                    if (arrayId.includes(answer)) {
                        return "This ID is already taken. Please enter a different number.";
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email?",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's GitHub profile?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMember.push(engineer);
            arrayId.push(answers.engineerId);
            createTeam();
        });
    }
  
    const addIntern = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is your intern's id?",
                validate: answer => {
                    if (arrayId.includes(answer)) {
                        return "This ID is already taken. Please enter a different number.";
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email?",
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is your intern's school?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMember.push(intern);
            arrayId.push(answers.internId);
            createTeam();
        });
    }
  
    const buildTeam = () => {
      if (!fs.existsSync(outputDirectory)) {
        fs.mkdirSync(outputDirectory)
      }
      fs.writeFileSync(outputPath, render(teamMember), "utf-8");
    }
    createManager();
}
  
startApp();