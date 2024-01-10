const inquirer = require('inquirer');
const fs = require('fs');

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
        message: 'Provide a short description of your project.',
    },
    {
       type: 'input',
       name: 'installation',
       message: 'What steps, if any, are required to install your project?', 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use and/or include screenshots.',
    },
    {
        type: 'input',
        name: 'credit',
        message: 'List your collaborators or sources, if any.',
    },
    {
        type: 'input',
        name: 'links',
        message: 'List any links to, and for your project.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license for this project.',
        choices: ['MIT', 'Apache 2.0', 'GNU v3.0', 'Boost 1.0', 'BSD 2', 'BSD 3', 'none'],
    }
])