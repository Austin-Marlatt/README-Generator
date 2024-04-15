// Writes a function badge in ,md format, with the user chosen license added in
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`;
}

// Writes a license link for the TOC, in .md format
function renderLicenseLink() {
  return `* [License](#license)`;
};

// Writes the license section of the README, in .md format, adds in the user chosen license
function renderLicenseSection(license) {
  return ` ## License
  
  This project is licenseed under ${license}.`
}

// Function that writes the skeleton of the markdown for the README file,
// Dynamically adds in user information using template litrerals.
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

Run the following command to download the required dependencies: 

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

The following command will run tests:

\`\`\`
${data.tests}
\`\`\`

## Questions

Have questions?

Feel free to email me at [${data.email}](${data.email})

Check out the other projects I have worked on at [${data.github}](https://github.com/${data.github}/)

${renderLicenseSection(data.license)}
`;
}

// Allows export of the function, used in index.js
module.exports = generateMarkdown;