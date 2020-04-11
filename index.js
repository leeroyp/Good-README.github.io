var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
        message: "Enter your GitHub username:",
        name: "username"  
    },
  {
    message: "What is the tittle of your project " ,
    name: "title"
    
  },
  {
    
    message: "Please provide a detailed description of your project",
   name:"Description"
  },
  {
   message:'What are the steps required to install your project?  ',
   name:'Installation'
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
    name:" Contributors"
    },
    {
    
    },


]).then(function(data) {

  console.log(data)
});
