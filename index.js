// importing required modules and files, asigned as variables for easy access later
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// An array of questions to be passed into a inquirer.prompt method
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
      "Does your project require an installation? If so, What command should be used?.",
    name: "installation",
  },
  {
    type: "input",
    message: "Explain how to use this application.",
    name: "usage",
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
    choices: ["Apache 2.0","GNU General Public v3.0","MIT","BSD 2-Clause Simplified","BSD 3-Clause New or Revised","Boost Software 1.0","Creative Commons Zero v1.0 Universal","Eclipse Public 2.0","GNU Affero General Public v3.0","GNU General Public v2.0","GNU lesser General Public v2.1","Mozilla Public 2.0","The Unlicense"],
    Default: "MIT",
    name: "license",
  },
];

// fs.writeFile method used to write the markdown for our README,
// Uses information from prompt to complete, wrapped in a function so we can call itin init()
function writeToFile(fileName, data) {
  return fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
    err && console.error(err);
    });
}

// Function to initialize app, calls inquirer.prompt with the questions array from above,
// Then passes the responses to the writeFile function where we create, or overwrite,
// a file called 'README.md' and writes data to it with the imported 'generateMarkdown()'
function init() {
  inquirer.prompt(questions)
    .then((inquirerResonses) => {
      writeToFile('README.md', generateMarkdown({ ...inquirerResonses}));
    });
}

// Function call to initialize app
init();