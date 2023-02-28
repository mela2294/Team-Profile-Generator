//  Employee class
class Employee {
    // Constructor function
    constructor(name, role, id, email) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

}

// Exporting 
module.exports = Employee;