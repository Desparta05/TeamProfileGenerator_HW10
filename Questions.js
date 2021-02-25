const roles = ['Manager', 'Engineer', 'Intern'];

const managerQuestions = [
    {
        type:'input',
        name:'name',
        message: 'What is your name?',
    },{
        type:'input',
        name:'id',
        message: 'What is you Employee ID# ?',
    },{
        type:'input',
        name:'Email',
        message: 'What is your Email Address?',
    },{
        type:'input',
        name:'officeNumber',
        message: 'What is your Email Address?',
    }
];

const engineerQuestions =[
    {
        type:'input',
        name:'name',
        message: 'What is your name?',
    },{
        type:'input',
        name:'id',
        message: 'What is you Employee ID# ?',
    },{
        type:'input',
        name:'Email',
        message: 'What is your Email Address?',
    },{
        type:'input',
        name:'gitHub',
        message: 'What is your Git Hub Username?',
    }
];

const internQuestions =[
    {
        type:'input',
        name:'name',
        message: 'What is your name?',
    },{
        type:'input',
        name:'id',
        message: 'What is you Employee ID# ?',
    },{
        type:'input',
        name:'Email',
        message: 'What is your Email Address?',
    },{
        type:'input',
        name:'School',
        message: 'What school do you go to?',
    }
];


module.exports = questions;