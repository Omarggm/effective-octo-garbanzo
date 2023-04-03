const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        name: 'characters',
        message: 'Enter up tp three characters',
        type : 'input',
        validate : function(input){
            if (input.length > 3){
                return 'you must use three characters or less';
            }
            return true;
        }
    },
    {
        name : 'textColor',
        message : 'please input a color for the text',
        type : 'input',
    },
    {
        name : 'shape',
        message : 'please select a shape',
        type : 'list',
        choices : ['circle', 'triangle', 'square'],
    },
    {
        name : 'shapeColor',
        message : 'please input a color for the shape',
        type : 'input',
    },
])
.then((answers) =>{
    console.log(answers);
});