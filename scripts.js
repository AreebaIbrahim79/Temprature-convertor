document.getElementById('convertButton').addEventListener('click', function () {  
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);  
    const unit = document.getElementById('unitSelect').value;  
    let result = '';  

    if (isNaN(temperatureInput)) {  
        result = 'Please enter a valid temperature.';  
    } else {  
        if (unit === 'celsius') {  
            // Convert Celsius to Fahrenheit  
            const fahrenheit = (temperatureInput * 9/5) + 32;  
            result = `${temperatureInput} °C is equal to ${fahrenheit.toFixed(2)} °F`;  
        } else {  
            // Convert Fahrenheit to Celsius  
            const celsius = (temperatureInput - 32) * 5/9;  
            result = `${temperatureInput} °F is equal to ${celsius.toFixed(2)} °C`;  
        }  
    }  

    document.getElementById('result').innerText = result;  
});