const generateTeam = (team) => {
    console.log(team);
    const html = [];
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class='card' style='width: 18rem;'>
        <div class='card-header'>
        <h2 class='card-title'>{{ name }}</h2>
        <h3 class='card-title'><i class='fas fa-glasses mr-2'></i>{{ role }}</h3>
        </div>
        ${manager.name} <br/>
        <div class="card-body">
        <ul class='list-group list-group-flush'>
        <li class='list-group-item'>ID: ${manager.Id}</li>
        <li class='list-group-item'>Email: <span id='email'><a href='mailto:${manager.email}'></a></span></li>
        <li class='list-group-item'Office Number: ${manager.officeNumber}</li>
        </ul>
        </div>
        `;
        html.push(managerHtml);
    }
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
        <div class='card' style='width: 18rem;'>
        <div class='card-header'>
        <h2 class='card-title'>{{ name }}</h2>
        <h3 class='card-title'><i class='fas fa-glasses mr-2'></i>{{ role }}</h3>
        </div>
        ${engineer.name} <br/>
        <div class="card-body">
        <i class='fas fa-mug-hot'></i>Engineer<div>
        <ul class='list-group list-group-flush'>
        <li class='list-group-item'>ID: ${engineer.Id}</li>
        <li class='list-group-item'>Email: <span id='email'><a href='mailto:${engineer.email}'></a></span></li>
        <li class='list-group-item'Github Username: <a target='_blank' href='https://github.com/${engineer.github}'></a></li>
        </ul>
        </div>
        `;
        html.push(engineerHtml);
    }
    const generateInter = intern => {
        console.log(inter);
        let internHtml = `
        <div class='card' style='width: 18rem;'>
        <div class='card-header'>
        <h2 class='card-title'>{{ name }}</h2>
        <h3 class='card-title'><i class='fas fa-glasses mr-2'></i>{{ role }}</h3>
        </div>
        ${intern.name} <br/>
        <div class="card-body">
        <i class='fas fa-mug-hot'></i>Intern<div>
        <ul class='list-group list-group-flush'>
        <li class='list-group-item'>ID: ${intern.Id}</li>
        <li class='list-group-item'>Email: <span id='email'><a href='mailto:${intern.email}'></a></span></li>
        <li class='list-group-item'School: ${intern.school}</li>
        </ul>
        </div>
        `;
        html.push(internHtml);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }

    return html.join('');

}

const team = (teamMembers) => {
    return `

<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset='UTF-8'></meta>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'></meta>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
        <link rel='stylesheet' href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

        <script src='#'></script>
        <link rel='stylesheet' href='./style.css'></link>
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h2>My Team</h2>
        </header>

        <main> ${generateTeam(teamMembers)} </main>

    </body>
</html> 

    `;
}

module.exports = {generateTeam, team} 