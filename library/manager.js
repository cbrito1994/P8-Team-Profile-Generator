const inquirer = require('inquirer');
const Employee = require('./employee');

class Manager extends Employee{
    constructor(officeNumber){
        super();
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter the team manager’s office number',
            }
        ])
    }
    getRole(){
        return 'Manager'
    }
}

module.exports = Manager