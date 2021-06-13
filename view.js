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
function dictionary(model){
    const {city} = model
    const {temp} = model
    const {min}= model
    const {max}= model
    const {dictio}= model
    row={Name: city, Temperature: temp, Max: max, Min: min}
    dictio.push(row)
    return dictio
    }

function getTable(model){
    const dictionaryUpdate=dictionary(model)
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
    const {action} = model
    const {cities}= model
    const message = 'Which one?'
    return inquirer.prompt({
        name: 'action',
        type: 'list',
        message: message,
        default: action,
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
