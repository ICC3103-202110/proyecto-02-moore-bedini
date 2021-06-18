const {inputForm, listForm, listDeleteUpdate} = require('./view')
const {printTable} = require('console-table-printer')
const axios= require('axios')
const API_URL       = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY       = 'd8c88ed8949052ac66898d9946a45d68';
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
            const LOCATION_NAME = city;
            const FULL_API_URL  = `${API_URL}?q=${LOCATION_NAME}&appid=${API_KEY}`;
            await axios
                .get(FULL_API_URL)
                .then(response => {
                    const temperatureK = response.data.main.temp;
                    const temperatureMin= response.data.main.temp_min;
                    const temperatureMax= response.data.main.temp_max;
                    const cityName = response.data.name;
                    const temperatureCelsius = temperatureK - 273.15;
                    const temperatureMinCelsius = temperatureMin - 273.15;
                    const temperatureMaxCelsius = temperatureMax - 273.15;
                    const updatedModel = update(action, cityName, model, temperatureCelsius, temperatureMaxCelsius, temperatureMinCelsius)
                    state = {
                        ...state,
                        model: updatedModel,
                        currentView: view(updatedModel)
            }
        })}
        else{
            const {city} = await listDeleteUpdate(model)
            const LOCATION_NAME = city;
            const FULL_API_URL  = `${API_URL}?q=${LOCATION_NAME}&appid=${API_KEY}`;
            await axios
                .get(FULL_API_URL)
                .then(response => {
                    const temperatureK = response.data.main.temp;
                    const temperatureMin= response.data.main.temp_min;
                    const temperatureMax= response.data.main.temp_max;
                    const cityName = response.data.name;
                    const temperatureCelsius = temperatureK - 273.15;
                    const temperatureMinCelsius = temperatureMin - 273.15;
                    const temperatureMaxCelsius = temperatureMax - 273.15;
                    const updatedModel = update(action, cityName, model, temperatureCelsius, temperatureMaxCelsius, temperatureMinCelsius)
                    state = {
                        ...state,
                        model: updatedModel,
                        currentView: view(updatedModel)
            }
        })
    }}
}
module.exports = {
    app
}