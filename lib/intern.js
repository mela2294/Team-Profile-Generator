// Importing the employee parent class
const Employee = require('./employee');

// Intern class extends the employee parent class
class Intern extends Employee {
    // Constructor function
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;

        this.role = 'Intern';

    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }

}
// Exporting
module.exports = Intern