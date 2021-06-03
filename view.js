const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.yellowBright(
        figlet.textSync(
            'Weather App',
            {
                horizontalLayout: 'full',
                font: 'roman'
            }
        )
    )
}

function getTable(model){
    const {name} = model
    const {temp} = model
    const {max} = model 
    const {min} = model
    return [
        {'name': name, 'temp': temp, 'max': max, 'min': min}
        ]
}

function inputForm1(model){
    const {input1} = model
    const message = 'Location?'  
    return inquirer.prompt([
        {
            name: 'input1',
            type: 'input1',
            message: message,
            default: input1
        }
    ])
}

function listForm1(model){
    const {input2} = model
    const message = 'Select action:'
    const choices = ['Add City', 'Update City', 'Delete City']
    return inquirer.prompt({
        name: 'input2',
        type: 'list',
        message: message, 
        default: input2,
        choices: choices
    })
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm1,
    listForm1
}