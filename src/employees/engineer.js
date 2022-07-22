const Employee = require("./employee");

// CREATE ENGINEER CLASS WITH GITHUB
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub;
    }
    // RETURN USER INPUT FOR GITHUB
    getGitHub() {
        return this.gitHub;
    }
    // DEFINE ROLE
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;
