const inquirer = require('inquirer');
const fs = require('fs');


generateReadMe = ({ title, description, installation, usage, license, contribute, tests, questions, email }) =>
`# ${title}

## Description
${description}


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Screenshot
![alt text](Screenshot.png)

## License
${license}

## Contributing
${contribute}

## Tests
${tests}

## Questions
* GitHub: https://github.com/${questions}
* Email: ${email}`;

inquirer
.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short summary of your project:',
    },
    {
       type: 'input',
       name: 'installation',
       message: 'What steps, if any, are required to install your project?', 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions or examples for use.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license for this project.',
        choices: ['MIT', 'Apache 2.0', 'Boost 1.0', 'BSD 2', 'BSD 3', 'none'],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'If you would like other developers to contribute, please provide any guidelines to do so.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'List any tests for your application.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your GitHub username to link to your profile',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address for any additional questions',
    },
])

.then((response) => {
    const readMeMD = generateReadMe(response);

    fs.writeFile('README.md', readMeMD, (err) =>
    err ? console.log(err) : console.log('Creating Professional README.md...')
    );
});
