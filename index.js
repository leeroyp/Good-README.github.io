var inquirer = require("inquirer");
const axios = require("axios");
var fs = require('fs');


// let questions =
inquirer.prompt(
[
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
])


// function init(){
// inquirer.prompt(questions)
.then(answers => {
    console.info('Answers:', answers);
    fs.writeFile('readme.txt', JSON.stringify(answers, null, '\t'), function(err) {

        if (err) {
          return console.log(err);
        }
    
    })
    (function ({username}){
    const queryUrl = `https://api.github.com/users/${username}`
    
    axios
    .get(queryUrl)
    .then((res)=>{
        // console.log(res.data)
  console.log(res.data.avatar_url)
  console.log(res.data.email)
        // portPic = res.data.avatar_url;
    })
})
  });

 

// init()