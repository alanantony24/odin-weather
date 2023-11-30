import getWeather from "./currentWeather";
import getForecastWeather from "./forecastWeather"
import {getCityFromForm, changeDateTime, changeLocation, changeCurrentWeather, changeForecastWeather} from "./dom";

//Trigger the API call on submitting the form using the "Enter" key
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = getCityFromForm();
  const weatherData = getWeather(city);
  weatherData.then(function (result) {
    //once the promise is resolved, quickly change the date, location and temp
    changeDateTime(result);
    changeLocation(result);
    changeCurrentWeather(result);
  });
  const forecastWeatherData = getForecastWeather(city);
  forecastWeatherData.then(function (result) {
    //upon resolving the promise, change the forecast weather information in the DOM.
    changeForecastWeather(result)
  })
});
