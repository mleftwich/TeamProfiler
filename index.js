// INSTALL INQUIRER
const inquirer = require('inquirer');

// FUNCTION TO GENERATE USER INPUT 
async function main() {
 
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
            'Manager',
            'Engineer',
            'Intern'
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
        when: (response) => response.role === 'Manager',
    },
    {
        type: 'input',
        message: 'What is the employees GitHub username?',
        name: 'gitHub',
        when: (response) => response.role === 'Engineer',
    },
    {
        type: 'input',
        message: 'What school is the intern from?',
        name: 'school',
        when: (response) => response.role === 'Intern',
    },
    {
        type: 'confirm',
        message: 'Add another employee?',
        name: 'complete',
        },
 ])

     // CHECK IF NEW ENTRY IS DESIRED
     if (!response.complete) {
        //generate html
     } else {
       await main();
     }

}

main();







