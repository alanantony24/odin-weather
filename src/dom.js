import moment from "moment/moment";

//get the city from the input box
export const getCityFromForm = () => {
    const city = document.getElementById("place").value;
    return city;
}

export const changeDateTime = (info) => {
    //get the current date and time info from the API data
    let dayInfo = moment(info.location.localtime);
    console.log(dayInfo)

    //use momentJS to format the date and time accordingly
    const time = dayInfo.format('LT');
    const dayOfTheWeek = dayInfo.format('dddd');
    const day = dayInfo.format('LL');
    
    //select the dom elements and set the data to the elements
    const dateDom = document.querySelector('.date');
    const timeDom = document.querySelectorAll('h1')[0];
    const amOrPm = document.querySelector('.amOrPm');
    dateDom.textContent = day + ' ' + dayOfTheWeek;
    timeDom.textContent = time.substring(0, time.length - 2);
    amOrPm.textContent = time.substring(time.length - 2, time.length);
}


export const changeLocation = (info) => {
    //extract the location info from the API data
    let locationInfo = info.location;
    
    //select the dom elements and set the data to the elements
    const city = document.querySelector('.city');
    const country = document.querySelector('.country');
    city.textContent = locationInfo.name + ', ' + locationInfo.region;
    country.textContent = locationInfo.country; 
}

export const changeCurrentWeather = (info) => {
    //get the info on temo from the current weather API
    let currentTemp = info.current.temp_c;
    
    //select the dom element and set the temp data
    const dayTemp = document.querySelector(".dayTemp");
    const img = document.querySelector(".tempToday");
    img.children[0].src = info.current.condition.icon;
    dayTemp.children[1] = currentTemp + '°C';
}