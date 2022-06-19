const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require ("./lib/Manager.js");
const Engineer = require ("./lib/Engineer.js");
const Intern = require ("./lib/Intern.js");

const generateTeamPage = require("./src/page-template.js");

const team = [];



const getManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter manager name (required):",
            validate: managerInput => {
                if (managerInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter manager ID (required):",
            validate: managerInput => {
                if (managerInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's ID!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter manager email (required):",
            validate: managerInput => {
                if (managerInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's email!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "office",
            message: "Enter manager office number (required):",
            validate: managerInput => {
                if (managerInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number!");
                    return false;
                }
            }
        }
    ])
    .then(data => {
        console.log(data);
        const manager = new Manager(data.name, data.id, data.email, data.office);
        team.push(manager);
        userMenu();
    })
};



const userMenu = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "What would you like to do?",
            choices: ["add an Engineer", "add an Intern", "finish building team"]
        }
    ])
    .then(menuSelection => {

        switch (menuSelection.menu) {

            case "add an Engineer":
                console.log("Add Engineer");
                getEngineer();
                break;
        
            case "add an Intern":
                console.log("Add Intern");
                getIntern();
                break;

            case "finish building team":
                console.log("Team Completed");
                buildTeam();
                break;
        }
    });
    
};



const getEngineer = () => {
    console.log(`
*******************
* Adding Engineer *
*******************
    `)


    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Engineer's name (required):",
            validate: engineerInput => {
                if (engineerInput) {
                    return true;
                } else {
                    console.log ("Please enter the engineer's name!");
                    return false;
                }

            }
        },
        {
            type: "input",
            name: "id",
            message: "Engineer's ID (required):",
            validate: engineerInput => {
                if (engineerInput) {
                    return true;
                } else {
                    console.log ("Please enter the engineer's ID!");
                    return false;
                }

            }   
        },
        {
        type: "input",
        name: "email",
        message: "Engineer's email (required):",
        validate: engineerInput => {
            if (engineerInput) {
                return true;
            } else {
                console.log ("Please enter the engineer's email!");
                return false;
            }

        }
        },
        {
            type: "input",
            name: "githubName",
            message: "Engineer's GitHub Username (required):",
            validate: engineerInput => {
                if (engineerInput) {
                    return true;
                } else {
                    console.log ("Please enter the engineer's GitHub Username!");
                    return false;
                }
        
            }
        }
    ])
    .then(data => {
        console.log(data);
        const engineer = new Engineer(data.name, data.id, data.email, data.githubName);
        team.push(engineer);
        userMenu();
    })

}



const getIntern = () => {
    console.log(`
*******************
*  Adding Intern  *
*******************
    `)


    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Intern's name (required):",
            validate: internInput => {
                if (internInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's name!");
                    return false;
                }

            }
        },
        {
            type: "input",
            name: "id",
            message: "Intern's ID (required):",
            validate: internInput => {
                if (internInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's ID!");
                    return false;
                }

            }   
        },
        {
        type: "input",
        name: "email",
        message: "Intern's email (required):",
        validate: internInput => {
            if (internInput) {
                return true;
            } else {
                console.log ("Please enter the intern's email!");
                return false;
            }

        }
        },
        {
            type: "input",
            name: "school",
            message: "Intern's school (required):",
            validate: internInput => {
                if (internInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!");
                    return false;
                }
        
            }
        }
    ])
    .then(data => {
        console.log(data);
        const intern = new Intern(data.name, data.id, data.email, data.school);
        team.push(intern);
        userMenu();
    })

}



const buildTeam = () => {
    console.log(`
**********************
* Building Team Page *
**********************
    `);

    const writeToFile = fileContent => {
        fs.writeFile("./dist/team.html", fileContent, err => {
            if (err) {
                return;
            }

            if (!err) {
                return console.log("File Created Successfully");
            }
        });
    }

    var fileContent = generateTeamPage(team);
    writeToFile(fileContent);

}





function init() {

    getManager();
            
}



init();

module.exports = getManager;
module.exports = getEngineer;
module.exports = getIntern;





    