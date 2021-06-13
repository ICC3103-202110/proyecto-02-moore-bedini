function update(action, city, model){
    const {dictio}=model
    const {cities} = model
    if (action==='Add City'){
        const newCity = city
        const newTemperature = Math.floor(Math.random() * (50 - -10) + -10)
        const newMax =  Math.floor(Math.random() * (60 - 30) + 30)
        const newMin =  Math.floor(Math.random() * (-1 - -72) + -72)
        cities.push(city)
        return {
            ...model,
            city: newCity,
            temp: newTemperature,
            max: newMax,
            min: newMin,
            cities: cities
        }
    }
    else if (action=='Delete City'){
        var index = dictio.map(function(o) { return o.Name; }).indexOf(city);
        dictio.splice(index,1)
        var i = cities.indexOf(city)
        choices.splice(i,1)
        return {
            ...model,
            cities: cities,
            dictio: dictio,
        }
    }
    else if (action==='Update City'){
        var index = dictio.map(function(o) { return o.Name; }).indexOf(city);
        const updateTemp =dictio[index].Temperature = Math.floor(Math.random() * (50 - -10) + -10)
        const updateMax= dictio[index].Max = Math.floor(Math.random() * (60 - 30) + 30)
        const updateMin= dictio[index].Min = Math.floor(Math.random() * (-1 - -72) + -72)
        return {
            ...model,
            city: city,
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


