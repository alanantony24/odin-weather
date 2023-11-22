import getWeather from "./apiFunctions";
import getCityFromForm from "./dom";

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = getCityFromForm();
  const weatherData = getWeather(city);
  weatherData.then(function (result) {
    console.log(result);
  });
});
