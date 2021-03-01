// templates pages
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
//const html = require("./src/index.html");
// node
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const util = require("util");
// writing and appending files to dist
const writeFileAsync = util.promisify(fs.writeFile);

// empty array used to hold team
let teamArray = [];



function compilePage() {
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile</title>
    </head>
    
    <body>
        <div class="member-card">
            <div class="card">
                <h2>${teamArray[i].name}</h2>
                <p>Employee ID: ${teamArray[i].id}</p>
                <p>Github: <a href='https://github.com/ ${teamArray[i].github}'>${teamArray[i].github}</a></p>
                <p>Email: <a href='mailto:${teamArray[i].email}'>${teamArray[i].email}</a>></p>
                </div>
                </div>
    </body>
    
    </html>
    `
}
    fs.writeFile(`./generated-html.html`, function (err) {
        
    })


function end() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Yes", "No I am done"],
            name: "ending switch"
        }
    ])

        .then(function (data) {

            switch (data.endData) {
                case "Yes":
                    addTeamMembers();
                    break;
                case "No, my team is complete":
                    compilePage();
                    break;
            }
        });
}

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
            end()
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
            end()
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
            end()
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
            end()
        });
};

addTeamMembers()
