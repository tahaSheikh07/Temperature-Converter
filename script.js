document.getElementById('convert-btn').addEventListener('click', function() {  

    const temperature = parseFloat(document.getElementById('temperature').value);  

    const fromUnit = document.getElementById('from-unit').value;  

    const toUnit = document.getElementById('to-unit').value;  

    let result;  

    if (isNaN(temperature)) {  
        document.getElementById('result').innerText = 'Please enter a valid temperature.';  
        return;  
    }  

    if (fromUnit === toUnit) {  
        result = temperature;  
    } else
     {  
        let tempInCelsius;  
        switch (fromUnit) {  
            case 'kelvin':  
                tempInCelsius = temperature - 273.15;  
                break;  
            case 'celsius':  
                tempInCelsius = temperature;  
                break;  
            case 'fahrenheit':  
                tempInCelsius = (temperature - 32) * 5 / 9;  
                break;  
            default:  
                document.getElementById('result').innerText = 'Invalid from unit.';  
                return;  
        }  

        switch (toUnit)
         {  
            case 'kelvin':  
                result = tempInCelsius + 273.15;  
                break;  
            case 'celsius':  
                result = tempInCelsius;  
                break;  
            case 'fahrenheit':  
                result = tempInCelsius * 9 / 5 + 32;  
                break;  
            default:  
                document.getElementById('result').innerText = 'Invalid to unit.';  
                return;  
        }  
    }  

   
    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;  
});