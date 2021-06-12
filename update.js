function update(action, city, model){
    if (action==='Add City'){
        console.log('xd')
        const newCity = city
        const newTemperature = Math.floor(Math.random() * (50 - -10) + -10)
        const newMax =  Math.floor(Math.random() * (60 - 30) + 30)
        const newMin =  Math.floor(Math.random() * (-1 - -72) + -72)
        return {
            ...model,
            city: newCity,
            temp: newTemperature,
            max: newMax,
            min: newMin,
        }
    }
}
        
module.exports={
    update
}
