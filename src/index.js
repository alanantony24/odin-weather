import getWeather from './apiFunctions';

const weatherData = getWeather("Singapore");
weatherData.then(function(result) {
    console.log(result);
})
