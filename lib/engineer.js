//  Importing the employee parent class
const Employee = require('./Employee');

// Engineer class extends the employee class
class Engineer extends Employee {
    // Contruction function
    constructor(name, id, email, github) {
        super(name, 'Engineer', id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
}

// Exporting
module.exports = Engineer;