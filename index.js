//  Dependancies
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];

const init = () => {
    const createManager = async () => {
        const managerInfo = await inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the name of your manager?',
                validate: (answer) => {
                    if (answer) {
                        return true
                    }
                    return 'Please answer at least one character';
                },
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is the Manager ID?',
                validate: (answer) => {
                    const id = answer.match(/^[1-9]\d*$/);
                    if (id) {
                        return true
                    }
                    return 'Please enter a positive integer';
                },
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the Manager email?',
                validate: (answer) => {
                    const email = answer.match(/\S+@\S+\.\S+/);
                    if (email) {
                        return true
                    }
                    return 'Please enter valid email address';
                },
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: 'What is the Manager office number?',
                validate: (answer) => {
                    const officeNumber = answer.match(/^[1-9]\d*$/);
                    if (officeNumber) {
                        return true
                    }
                    return 'Please enter a positive integer';
                },
            }
        ]);

        const manager = new Manager(
            managerInfo.managerName,
            managerInfo.managerID,
            managerInfo.managerEmail,
            managerInfo.managerOffice
        );

        teamMembers.push(manager);
        createTeam();
    };

    const createEngineer = async () => {
        const engineerInfo = await inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the name of your engineer?',
                validate: (answer) => {
                    if (answer) {
                        return true
                    }
                    return 'Please answer at least one character';
                },
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is the Engineer ID?',
                validate: (answer) => {
                    const id = answer.match(/^[1-9]\d*$/);
                    if (id) {
                        return true
                    }
                    return 'Please enter a positive integer';
                },
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the Engineer email?',
                validate: (answer) => {
                    const email = answer.match(/\S+@\S+\.\S+/);
                    if (email) {
                        return true
                    }
                    return 'Please enter valid email address';
                },
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the Engineer github?',
                validate: (answer) => {
                    if (github) {
                        return true
                    }
                    return 'Please enter a positive integer';
                },
            }
        ]);

        const engineer = new Engineer(
            engineerInfo.engineerName,
            engineerInfo.engineerID,
            engineerInfo.engineerEmail,
            engineerInfo.github
        );

        teamMembers.push(engineer);
        createTeam();
    };

    const createIntern = async () => {
        const internInfo = await inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the name of your Intern?',
                validate: (answer) => {
                    if (answer) {
                        return true
                    }
                    return 'Please answer at least one character';
                },
            },
            {
                type: 'input',
                name: 'internId',
                message: 'What is the Intern ID?',
                validate: (answer) => {
                    const id = answer.match(/^[1-9]\d*$/);
                    if (id) {
                        return true
                    }
                    return 'Please enter a positive integer';
                },
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the Intern email?',
                validate: (answer) => {
                    const email = answer.match(/\S+@\S+\.\S+/);
                    if (email) {
                        return true
                    }
                    return 'Please enter valid email address';
                },
            },
            {
                type: 'input',
                name: 'school',
                message: 'Where does/did the Intern attend school?',
                validate: (answer) => {
                    if (answer) {
                        return true
                    }
                    return 'Please enter a least one  character';
                },
            }
        ]);

        const intern = new Intern(
            internInfo.internName,
            internInfo.internID,
            internInfo.internEmail,
            internInfo.school
        );

        teamMembers.push(intern);
        createTeam();
    };

    const createTeam = async () => {
        const teamMember = await inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: 'What is the employees role at your company?',
                choices: ['Engineer', 'Intern', 'There is no more employees to add'],
            },
        ]);

        switch (teamMember.role) {
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;
            default:
                buildTeam();
        }
    };

    const buildTeam = () => {
        const distDisrectory = path.resolve(__dirname, 'dist');
        const teamHtmlPath = path.join(distDirectory, 'team.html')
        if (!fs.existsSync(distDisrectory)) {
            fs.mkdirSync(distDisrectory);
        }

        fs.writeFileSync(distPatch, render(teamMembers), 'utf-8')
    };

    createManager();
};

init();