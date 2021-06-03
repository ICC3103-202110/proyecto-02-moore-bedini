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
    const {city} = model
    const {temp} = model
    const {max}= model
    const {min}= model
    return [
        {Name: city, 
        Temperature: temp,
        Max: max,
        Min: min}
    ]
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
            validate: function(value){
                if(len(value) === 0){
                    return true
                } else {
                    return 'No city added, add one'
                }
            }},
    )}

function listForm(model, cities){
    const {cities}= model
    if (len(cities)!==0){
        choices=['Add city', 'Update city','Delete city']
    }
    else {
        choices=['Add city']
    }
    const message1 = 'Select Action: '
    const choices1=choices
    return inquirer.prompt({
            name: 'cities',
            type: 'cities',
            message: message1,
            default: cities,
            validate: function(value){
                if(len(value) !== 0){
                    return true
                } else {
                    return 'No city added, add one'
                }
            },
            choices: choices1
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
}
