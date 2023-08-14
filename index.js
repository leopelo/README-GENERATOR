// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project name?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please add a description of the project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions for your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the usage instructions for your project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['MIT', 'Apache', 'Boost', 'ISC','GNU'],
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'What are the guidelines for contributing to this repository?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be used to run tests?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email associated with this repository?',
        },
    ])
};

// TODO: Create a function to initialize app
function init() {
   questions()
   .then((answers) => writeFile('READ-ME.md', generateMarkdown(answers)))
   .then(() => console.log('Succesfully created READ-ME.md!'))
   .catch((err) => console.error(err));
};

// Function call to initialize app
init();
