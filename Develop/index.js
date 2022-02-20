// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");

const inquirer = require("inquirer");

const {renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown} = require("./utils/generateMarkdown");
const {generator} = require("./utils/template.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief description of your project.",
  },
  {
    type: "confirm",
    name: "contents",
    message: "Would you like to include a table of contents?",
  },
  {
    type: "input",
    name: "installation",
    message:
      "How would you get the project to run on your local drive (aka 'install')?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license.",
    choices: ["MIT", "ISC", "Apache"],
  },
  {
    type: "input",
    name: "contribute",
    message: "List contributtors.",
  },
  {
    type: "input",
    name: "tests",
    message: "List test types ran and how to run them.",
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userResponse) {
    console.log(userResponse)
    try {
      writeToFile("README.md", generator(userResponse));
    } catch (err) {
      console.log(err);
    }
    console.log("ReadMe successfully generated!!");
  });
}

// Function call to initialize app
init();
