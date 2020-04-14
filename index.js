const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");
const axios = require("axios");
// let questions =


function questions(){
 return inquirer.prompt([
    {
        message: "Enter your GitHub username:",
        name: "username"
    },
    {
        message: "What is the tittle of your project ",
        name: "title"
    },
    {
        message: "Please provide a detailed description of your project",
        name: "Description"
    },
    {
        type: "input",
        name: "contents",
        message: "What are the contents of the project?"
    },
    {
        message: 'What are the steps required to install your project?  ',
        name: 'Installation'
    },
    {
        message: "How to use the program ",
        name: "usage"
    },
    {
        message: "Provide all the licenses for he project",
        name: "license"
    },
    {
        messages: "list all the contributors for the project",
        name: "contributors"
    },
    {
        type: "input",
        name: "test",
        message: "How do you test the project?"
    },
    {
        type: "input",
        name: "badge",
        message: "Place shield.io badge URL here to include!"
    }
])}

function generate(data, git) {
    fs.writeFile('README.md', generateMarkdown(data, git), (err) => {
        if (err) {
            throw err;
        }
    })
}

async function init() {
    console.log("hi")
    try {
        const answers = await questions();

        const README = await api(answers.username);

        await generate(answers, README);

        console.log("Successfully generated README.md");
    } catch (err) {
        console.log(err);
    }

}

init();


