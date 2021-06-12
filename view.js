const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const d=[{}]
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
function dictionary(model, d){
    const {city} = model
    const {temp} = model
    const {min}= model
    const {max}= model
    row={Name: city, Temperature: temp, Max: max, Min: min}
    d.push(row)
    return d
    }

function getTable(model){
    const dictionaryUpdate=dictionary(model,d)
    return dictionaryUpdate
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
    const message = 'Select Action'
    const choices = ['Add City', 'Delete City','Update City']
    return inquirer.prompt({
        name: 'action',
        type: 'list',
        message: message,
        default: action,
        choices: choices,
    })
}

function listDelete(model){
    const {action} = model
    const message = 'Select Action'
    const choices = ['Add City', 'Delete City','Update City']
    return inquirer.prompt({
        name: 'action',
        type: 'list',
        message: message,
        default: action,
        choices: choices,
    })
}
function listUpdate(model){
    const {action} = model
    const message = 'Select Action'
    const choices = ['Add City', 'Delete City','Update City']
    return inquirer.prompt({
        name: 'action',
        type: 'list',
        message: message,
        default: action,
        choices: choices,
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
    listDelete,
    listUpdate,
}
