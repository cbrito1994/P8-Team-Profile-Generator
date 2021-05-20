const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the team manager’s name',
            }
        ])
    }
    getId(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Enter the team manager’s employee ID',
            }
        ])
    }
    getEmail(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'email',
                message: 'Enter the team manager’s email address',
            }
        ])
    }
    getRole(){
        return 'Employee'
    }
}

module.exports = Employee