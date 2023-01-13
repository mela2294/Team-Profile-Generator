//  Importing the employee parent class
const Employee = require('./employee');

// Engineer class extends the employee class
class Engineer extends Employee {
    // Contruction function
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;

        this.role = 'Engineer';

    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }

}

// Exporting
module.exports = Engineer