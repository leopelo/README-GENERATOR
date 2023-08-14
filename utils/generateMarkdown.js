
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)]

  ## Description
  ${data.description}

  ##Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  [This project is licensed under ${data.license}.]

  ## Contributing
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
[For additional questions, please contact me via my email: ${data.email}. If you are interested in my work, you can access more of my projects at  https://github.com/${data.github}. ]
  
`;
}

module.exports = generateMarkdown;
