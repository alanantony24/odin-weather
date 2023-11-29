import getWeather from "./currentWeather";
import {getCityFromForm, changeDateTime, changeLocation, changeCurrentWeather} from "./dom";


const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = getCityFromForm();
  const weatherData = getWeather(city);
  weatherData.then(function (result) {
    changeDateTime(result);
    changeLocation(result);
    changeCurrentWeather(result)
  });
});
