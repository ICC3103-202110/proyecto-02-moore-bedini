const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
function getTitle(){
    return chalk.yellow(
        figlet.textSync(
            'Weather App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {dictio}= model
    return dictio
}

function inputForm(model){
    const {city} = model
    const message = 'Location? '
    return inquirer.prompt(
        {
            name: 'city',
            type: 'city',
            message: message,
            default: city,
        }
    )
}

function listForm(model){
    const {action} = model
    const {cities}=model
    if ((cities.length)===0){
        choices= ['Add City']
    }
    else {
        choices = ['Add City', 'Delete City','Update City']
    }
    const message = 'Select Action'
    const choicesUpdated = choices
    return inquirer.prompt({
        name: 'action',
        type: 'list',
        message: message,
        default: action,
        choices: choicesUpdated,
    })
}

function listDeleteUpdate(model){
    const {cities}= model
    const {city}= model
    const message = 'Which one?'
    return inquirer.prompt({
        name: 'city',
        type: 'list',
        message: message,
        default: city,
        choices: cities,
    })
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm,
    listForm,
    listDeleteUpdate,
}
