const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const d=[{}]
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

function dictionary(model, d){
    const {city} = model
    const {temp} = model
    const {max} = model
    const {min} = model
    row={name: city, temp: temp, max: max, min: min}
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
            validate: function(value){
                if((value.length) === 0){
                    return true
                } else {
                    return 'No city added, add one'
                }
            }},
    )}

function listForm(model){
    const {cities}= model
    const message1 = 'Select Action: '
    if ((cities.length)!==0){
        const choices1 = ['Add city', 'Update city','Delete city']
        return inquirer.prompt({
            name: 'cities',
            type: 'list',
            message: message1,
            default: cities,
            choices: choices1
        })
    }
    else {
        const choices2 = ['Add city']
        return inquirer.prompt({
            name: 'cities',
            type: 'list',
            message: message1,
            default: cities,
            choices: choices2
        })
    }
    
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