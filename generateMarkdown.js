function generateMarkdown(data, response) {
    return `
  # ${data.title}
  # Table of Contents:
  1. [Description](#description)
  2. [Contents](#contents)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [Licensing](#license)nod
  6. [Contributions](#contributions)
  7. [Test](#test)
  8. [Questions](#questions)
  ## Description
  ${data.Description}
  ## Contents
  ${data.contents}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributions
  ${data.contributions}
  ## Test
  ${data.test}
  ## Questions
  ${data.questions}
  ## Badge(s)
  ![Badge](${data.badge})
  ## Questions
  ![image](${response.data.avatar_url})
  ${response.data.email}
  `;
  }
  
  module.exports = generateMarkdown;