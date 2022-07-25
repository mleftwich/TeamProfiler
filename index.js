// INSTALL INQUIRER
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const outPutPath = path.join(__dirname, 'output', 'team.html')
const outputHtml = require('./assets/src/html');

const Manager = require('./lib/employees/manager')
const Engineer = require('./lib/employees/engineer')
const Intern = require('./lib/employees/intern');


const employees = [];

// FUNCTION TO GENERATE USER INPUT 
async function main() {
    const managerRole = 'Manager'
    const engineerRole = 'Engineer'
    const internRole = 'Intern'
    const response = await inquirer.prompt([
            

    // ASK FOR ROLE, NAME, ID, EMAIL
    // IF MANAGER ASK FOR OFFICE NUMBER
    // IF ENGINEER ASK FOR GITHUB
    // IF INTERN ASK FOR SCHOOL

        {
        type: 'list',
        message: 'What is the employees role?',
        name: 'role',
        choices: [
            managerRole,
            engineerRole,
            internRole
        ]
    },
    {
        type: 'input',
        message: 'What is the employees name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the employees ID?',
        name: 'id',
     },
    {
        type: 'input',
        message: 'What is the employees email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the employees office number?',
        name: 'officeNum',
        when: (response) => response.role === managerRole,
    },
    {
        type: 'input',
        message: 'What is the employees GitHub username?',
        name: 'gitHub',
        when: (response) => response.role === engineerRole,
    },
    {
        type: 'input',
        message: 'What school is the intern from?',
        name: 'school',
        when: (response) => response.role === internRole,
    },
    {
        type: 'confirm',
        message: 'Add another employee?',
        name: 'complete',
        },
 ])


    // CHECK FIELDS HAVE BEEN ENTERED
    if(response.name === '' || response.id === '' || response.email === '' || response.officeNum === '' || response.gitHub === '' || response.school === '') {
        console.error('You must provide an entry for all fields')
    } else {
    // CHECK ROLE AND STORE EMPLOYEE
    if(response.role === managerRole) {
        employees.push(new Manager(response.name, response.id, response.email, response.officeNum))
    }

    if(response.role === engineerRole) {
        employees.push(new Engineer(response.name, response.id, response.email, response.gitHub))
    }
    if(response.role === internRole) {
        employees.push(new Intern(response.name, response.id, response.email, response.school))
    }

    console.log(employees)
    
     // CHECK IF NEW ENTRY IS DESIRED
     if (!response.complete) {
        // IF NOT GENERATE HTML
        const html = outputHtml(employees);
        fs.writeFileSync(outPutPath, html, 'utf-8')

     } else {
        // OTHERWISE RUN PROMPT AGAIN
       await main();
     }
    }
}

main();







