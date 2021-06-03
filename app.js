const {inputForm1, listForm1} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        console.clear()
        console.log(title)
        printTable(table)
        const {input1} = await listForm1(model)
        if (input1 === 'Add City'){
            const {input2} = await inputForm1(model)
            const updatedModel = update(input1, input2, model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }
        else if (input1 === 'Update City'){
            const {input2} = await inputForm1(model)
            const updatedModel = update(input1, input2, model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }
        else{
            const {input2} = await inputForm1(model)
            const updatedModel = update(input1, input2, model)
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