const Employee = require('./employee');

class Intern extends Employee{
    constructor(school){
        super();
        this.school = school;
    }
    getSchool(){
        
    }
    getRole(){
        return 'Intern'
    }
}

module.exports = Intern