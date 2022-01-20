class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;




/* const inquirer = require('inquirer');

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class Employee {
    log: ['name', 'id', 'email'],
    get 

   /*  inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'what is your name?'
    })
    .then (({ name }) => {
        this.employee = new Employee(name);
        return this.employee
    } 
}; */