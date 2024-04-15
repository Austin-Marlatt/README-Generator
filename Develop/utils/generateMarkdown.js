
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
}


function renderLicenseLink(license) {
  return `* [License](#license)`;
};


function renderLicenseSection(userInput) {
  return ` ## License
  
  This project is licenseed under the ${license} license`
}


function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)

*[Usage](#usage)

${renderLicenseLink(data.license)}

*[Contributing](#contributing)

*[Tests](#tests)

*[Questions](#questions)

## Installation

Run the following command to download the required dependencies: 

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

The following command will run tests:

\`\`\`
${data.tests}
\`\`\`

## Questions

Have questions?

Feel free to email me at ${data.email}

Check out the other projects I have worked on at [${data.github}](https://github.com/${data.github}/)

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;