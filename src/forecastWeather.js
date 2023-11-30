const API_KEY = "bbd00243749b4d8493c115127231811"; // Replace 'YOUR_API_KEY' with your actual API key
let country;

export default async function(c) {
    try {
        country = c;
        const URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${country}&days=10&aqi=yes&alerts=yes`;
        const data = await fetch(URL);
        const res = await data.json();
        return res;
    } catch (err) {
        console.log(err);
    }
}