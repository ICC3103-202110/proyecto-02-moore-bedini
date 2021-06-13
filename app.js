const {inputForm, listForm, listDeleteUpdate} = require('./view')
const {printTable} = require('console-table-printer')


async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        console.clear()
        console.log(title)
        printTable(table)
        const {action} = await listForm(model)
        if (action==='Add City'){
            const {city} = await inputForm(model)
            const updatedModel = update(action, city, model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }
        else {
            const {city} = await listDeleteUpdate(model)
            const updatedModel = update(action, city, model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }
    }
    }
module.exports = {
    app
}