const url = "http://api.weatherapi.com/v1/current.json?key=ffd100d9b42e4e71aa0162306231211&q=London&aqi=no"

//async function to call the API
async function getWeatherData() {
    try {
        const response = await fetch(url);
        const weatherData = await response.json();
        return weatherData;
    }
    catch (error) {
        alert(error);
    }
}

//invoke the function
let weatherData  = getWeatherData();

//use .then() to capture the results regardless of the promise state.
//Promises are forward direction only; You can only resolve them once. 
//The resolved value of a Promise is passed to its .then or .catch methods.
weatherData.then(function(response) {
    console.log(response);
})
