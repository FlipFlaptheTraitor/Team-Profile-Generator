// templates pages
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const html = require("./src/index.html");
// node
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const util = require("util");
// writing and appending files to dist
const writeFileAsync = util.promisify(fs.writeFile);

// empty array used to hold team
let teamArray = [];


function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Please choose a job title?",
            choices: ["Employee","Engineer", "Intern", "Manager"],
            name: "addTeamMember"
        }
    ])
        .then(function (data) {

            switch (data.addTeamMember) {
                case "Employee":
                addEmployee();
                 break;
                
                 case "Engineer":
                 addEngineer();
                 break;

                 case "Intern":
                 addIntern();
                 break;

                 case "Manager":
                 addManager();
                 break;
            }
        });
}
function addEmployee() {
    inquirer.prompt([
        {
            message: "Please enter the employee's name",
            name: "name"
        },
        {
            message: "Please enter the employee's email address",
            name: "email"
        },
        {
            message: "Please enter the employee's Github profile",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = teamArray.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Employee(name, id, email, github)
            teamArray.push(teamMember)
            addTeamMembers()
        });

};

function addEngineer() {
    inquirer.prompt([
        {
            message: "Please enter the engineers name",
            name: "name"
        },
        {
            message: "Please enter the engineers email",
            name: "email"
        },
        {
            message: "Please enter the engineers github username",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = teamArray.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            teamArray.push(teamMember)
            addTeamMembers()
        });

};

function addIntern() {
    inquirer.prompt([
        {
            message: "Please enter the intern's name",
            name: "name"
        },
        {
            message: "Please enter the intern's email address",
            name: "email"
        },
        {
            message: "Please enter the intern's Github profile",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = teamArray.length + 1
            const email = data.email
            const school = data.github
            const teamMember = new Intern(name, id, email, github)
            teamArray.push(teamMember)
            addTeamMembers()
        });

};
function addManager() {
    inquirer.prompt([
        {
            message: "Please enter the Manager's name",
            name: "name"
        },
        {
            message: "Please enter the Manager's email address",
            name: "email"
        },
        {
            message: "Please enter the Manager's Github profile",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = teamArray.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Manager(name, id, email, github)
            teamArray.push(teamMember)
            addTeamMembers()
        });

};