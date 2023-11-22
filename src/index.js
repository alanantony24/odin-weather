import getWeather from "./apiFunctions";
import {getCityFromForm, changeDateTime, changeLocation} from "./dom";


const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = getCityFromForm();
  const weatherData = getWeather(city);
  weatherData.then(function (result) {
    localStorage.clear();
    localStorage.setItem("currentWeatherData", JSON.stringify(result));
    changeDateTime();
    changeLocation();
  });
});
