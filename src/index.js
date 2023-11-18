const API_KEY = "80f10b59a2b01b019e66f623edec6705"; // Replace 'YOUR_API_KEY' with your actual API key
let country;

getWeather = async function(c) {
    try {
        country = c;
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}`;
        const data = await fetch(URL);
        const res = await data.json();
        return res;
    } catch (err) {
        console.log(err);
    }
};

(async () => {
    const weatherData = await getWeather("new york");
    console.log(weatherData);
})();
