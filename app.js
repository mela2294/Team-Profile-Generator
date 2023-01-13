const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const {generateTeam, team} = require('./generate');

const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Employee = require('./lib/employee');

const output_dir = path.resolve(__dirname, 'output');
const outputPath = path.join(output_dir, 'team.html');


const teamMembers = [];
const teamMemberId = [];

const promptManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee Id',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Enter your employee Id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Enter your email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Enter your office number');
                    return false;
                }
            }
        },

    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'menu',
            message: 'Select which option you like',
            choices: ['add an engineer', 'add an intern', 'quit'] 
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case 'add an engineer':
                    promptEngineer();
                    break;
                case 'add an intern':
                    promptIntern();
                    break;
                default:
                    console.log(JSON.stringify(teamMembers));
                    return;
            }
        });
};

const promptEngineer = () => {
    console.log(`

    Add a new Engineer

    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer?',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Enter the engineer name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employee ID',
            message: 'What is the employee ID?',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Enter your employee ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Enter your email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your github username',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Enter your Github username');
                    return false;
                }
            }
        },

    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`

    Add a New Intern

    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Enter the intern name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employee ID',
            message: 'What is the employee ID?',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Enter your employee ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Enter your email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your school',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Enter your school');
                    return false;
                }
            }
        },

    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(intern);
        promptMenu();
    })
}


promptManager();
team(teamMembers);
