const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./Questions');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const htmlTemp = require('./src/template');

