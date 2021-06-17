function update(action, cityName, model, temperatureCelsius, temperatureMaxCelsius, temperatureMinCelsius){
    const {dictio}=model
    const {cities} = model
    if (action==='Add City'){
        const row={Name: cityName, Temperature: temperatureCelsius, Max: temperatureMaxCelsius, Min: temperatureMinCelsius}
        dictio.push(row)
        cities.push(cityName)
        return {
            ...model,
            city: cityName,
            temp: temperatureCelsius,
            max: temperatureMaxCelsius,
            min: temperatureMinCelsius,
            cities: cities,
            dictio: dictio
            }}
    else if (action=='Delete City'){
        var cityIndex= cityName
        var index = dictio.findIndex(function (position) {
            return position.Name === cityIndex;
        });
        dictio.splice(index,1)
        var i = cities.indexOf(cityName)
        cities.splice(i,1)
        return {
            ...model,
            cities: cities,
            dictio: dictio,
        }
    }
    else if (action==='Update City'){
        var index = dictio.findIndex(function (position) {
            return position.Name === cityName;
        });
        const updateTemp =dictio[index].Temperature = temperatureCelsius
        const updateMax= dictio[index].Max = temperatureMaxCelsius
        const updateMin= dictio[index].Min = temperatureMinCelsius
            return {
                ...model,
                city: cityName,
                temp: updateTemp,
                max: updateMax,
                min: updateMin,
                cities: cities,
                dictio: dictio,
        }
        
    }
}       
module.exports={
    update
}


