const Employee = require('./employee');

class Engineer extends Employee{
    constructor(github){
        super();
        this.github = github;
    }
    getHithub(){
        
    }
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer