const FUNCTIONS = {
    'Add City': addCity,
    'Update City': updateCity,
    'Delete City': deleteCity
}

function addCity(cities){
    return dictionary(model, cities)
}

function deleteCity(cities, input2){
    var index = cities.map(function(o) { return o.Name; }).indexOf(input2);
    cities.splice(index,1)
    return cities
}

function updateCity(cities, input2){
    var index = cities.map(function(o) { return o.Name; }).indexOf(input2);
    
}


function update(input1, input2, model){
    const {Name} = model
    const {Temperature} = model
    const {Max} = model
    const {Min} = model
    const {cities} = model
    if (input1 === 'Add City'){
        const new_Name = input2
        const new_Temperature =  Math.floor(Math.random() * 100)
        const new_Max =  Math.floor(Math.random() * 100)
        const new_Min =  Math.floor(Math.random() * 100)
        const new_cities = dictionary
        return {
            ...model,
            Name: new_Name,
            Temperature: new_Temperature,
            Max: new_Max,
            Min: new_Min,
            cities: cities.push(new_Name)
        }
    }
    else if (input1 === 'Update City')
    {
        const new_Temperature =  Math.floor(Math.random() * 100)
        const new_Max =  Math.floor(Math.random() * 100)
        const new_Min =  Math.floor(Math.random() * 100)
        return {
            ...model,
            Name: new_Name,
            Temperature: new_Temperature,
            Max: new_Max,
            Min: new_Min,
            cities: cities.push(new_Name)
        }
    }   
    
}



module.exports = {
    update
}