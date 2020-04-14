const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./api");
// const generateMarkdown = require("./utils/generateMarkdown");
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
        message: 'What are the steps required to install your project?  ',
        name: 'Installation'
    },
    {
        message: "How to use the program ",
        name: "Usage"
    },
    {
        message: "Provide all the licenses for he project",
        name: "License"
    },
    {
        messages: "list all the contributors for the project",
        name: "Contributors"
    }
])}
 

async function init() {
    console.log("hi")
    try {
        const answers = await questions();

        const README = await api(answers.github);

        await generate(answers, README);

        console.log("Successfully generated README.md");
    } catch (err) {
        console.log(err);
    }

}

init();


