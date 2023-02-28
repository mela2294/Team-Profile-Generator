// Importing the employee parent class
const Employee = require('./Employee');

// Intern class extends the employee parent class
class Intern extends Employee {
    // Constructor function
    constructor(name, id, email, school) {
        super(name, 'Intern', id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}
// Exporting
module.exports = Intern;