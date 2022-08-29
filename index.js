// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { response } = require("express");
const { resolve } = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
inquirer;
const questions = () => {
  return inquirer.prompt([
    {
      type: "title",
      message: "What is the Title of the project?",
      name: "title",
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log("Enter a response!");
        }
      },
    },
    {
      type: "usage",
      message: "How will this project be used?",
      name: "usage",
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log("Enter a response!");
        }
      },
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log("Enter a response!");
        }
      },
    },
    {
      type: "input",
      message: "Who contributed?",
      name: "contribution",
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log("Enter a response!");
        }
      },
    },
    {
      type: "input",
      message: "What is your Github username?",
      name: "username",
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log("Enter a response!");
        }
      },
    },
    { type: 'list',
      message: "What licenses are being used?",
      name: "licenses",
      choices:['GPL v3.0', 'Apache 2.0', 'MIT', '  Other'],
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log("Enter a response!");
        }
      },
    },
    {
      type: 'input',
      message: "What are the questions?",
      name: "questions",
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log("Enter a response!");
        }
      },
    },
    {
    type: 'input',
      message: "What is the description of this project?",
      name: 'description',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log("Enter a response!");
        }
      },
    },
     {
    type: 'input',
      message: "How are you going to do the installation?",
      name: 'installation',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log("Enter a response!");
        }
      },
    },

     {
    type: 'input',
      message: "How are you going to test this project?",
      name: 'test',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log("Enter a response!");
        }
      },
    }
  ]).then(function(data){
    writeToFile('README.md', data)
  })
  
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (error) => {
    if (error) {
      console.log(error);
    }
    console.log("README.md successfully generated");
  });
};
function init() {
  questions()
      
      // .then(() => console.log("file created sucessfully"))
      // .then((error) => console.error(error))
      // writeToFile('README.md', generateMarkdown(input));
};

// Function call to initialize apps
init();

