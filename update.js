function convert(temp_value, inputFrom, inputTo){
    switch(inputFrom){
        case 'Celsius':
            switch(inputTo){
                case 'Celsius':
                    return 1*temp_value;
                case 'Fahrenheit':
                    return ((1*temp_value)-32)*(5/9);
                case 'Kelvin':
                    return 1*temp_value+273.15;
            }
        case 'Fahrenheit': 
            switch(inputTo){
                case 'Celsius':
                    return (5*(1*temp_value-32))/9;
                case 'Fahrenheit':
                    return 1*temp_value;
                case 'Kelvin':
                    return (5*(1*temp_value-32)/9 + 273.15);
            }
        case 'Kelvin': 
            switch(inputTo){
                case 'Celsius':
                    return 1*temp_value-273.15;
                case 'Fahrenheit':
                    return (9*(1*temp_value-273.15)/5 + 32);
                case 'Kelvin':
                    return 1*temp_value;
            }
    }

}


function update(input1, input, input4, input5, model){
    const {left_value} = model
    const {left_unit} = model
    const {right_value} = model
    const {right_unit} = model
    if (input1 === 'Y'){
        const new_left_value = input
        const new_left_unit = input4
        const new_right_value = convert(input, input4, input5)
        const new_right_unit = input5
        return {
            ...model,
            left_value: new_left_value,
            left_unit: new_left_unit,
            right_value: new_right_value,
            right_unit: new_right_unit,
            input1: 'Y/n',
            input2: new_left_value,
            input3: new_right_value,
            input4: input4,
            input5: input5
        }
    }
    else if (input1 === 'n')
    {
        const new_left_value = convert(input, input4, input5)
        const new_left_unit = input5
        const new_right_value = input
        const new_right_unit = input4
        return {
            ...model,
            left_value: new_left_value,
            left_unit: new_left_unit,
            right_value: new_right_value,
            right_unit: new_right_unit,
            input1: 'Y/n',
            input2: new_left_value,
            input3: new_right_value,
            input4: input4,
            input5: input5,
        }
    }   
    
}

module.exports = {
    update
}