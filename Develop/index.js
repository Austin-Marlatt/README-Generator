// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your project.",
    name: "description",
  },
  {
    type: "input",
    message:
      "Does your project require an installation? If not, please press enter to skip.",
    name: "installation",
  },
  {
    type: "input",
    message: "Explain the usage of your project.",
    name: "Usage",
  },
  {
    type: "input",
    message: "How could someone contribute to your project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "How would a user run the test script?",
    default: "npm test",
    name: "tests",
  },
  {
    type: "list",
    message: "What License would you like to use?",
    choices: ["Apache License 2.0","GNU General Public License v3.0","MIT License","BSD 2-Clause 'Simplified' License","BSD 3-Clause 'New' or 'Revised License","Boost Software License 1.0","Creative Commons Zero v1.0 Universal","Eclipse Public License 2.0","GNU Affero General Public License v3.0","GNU General Public License v2.0","GNU lesser General Public License v2.1","Mozilla Public License 2.0","The Unlicense"],
    Default: "MIT License",
    name: "license",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(path.join(process.cwd(), fileName),data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.promt(questions)
    .then((inquirerResonses) => {
      writeToFile('README.md', generateMarkdown({ ...inquirerResonses}));
    });
}

// Function call to initialize app
init();