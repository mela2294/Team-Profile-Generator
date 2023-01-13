// Importing the employee parent class
const Employee = require('./Employee');

// Manager class extends the employee parent class
class Manager extends Employee {
    // Contructor function
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';

    }

}

// Exporting
module.exports = Manager