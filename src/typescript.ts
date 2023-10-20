import { dayConverter, humidityStatus, monthConverter, searchBoxOpen, weatherPicturesIcon } from "./services/functions.services.js";
import { getTimeZone } from "./services/timezone.services.js";

const searchButton = document.querySelector('.search-button') as HTMLDivElement;
const search = document.querySelector('.search-btn') as HTMLDivElement;
const searchInput = document.querySelector('.search') as HTMLInputElement
const cityName = document.querySelector('.city-name') as HTMLInputElement

searchButton.addEventListener('mouseover', () => {
    cityName.style.display = 'none';
    searchButton.style.width = "85%"
    searchInput.style.display = 'block';

})
searchButton.addEventListener('mouseleave', () => {
    searchButton.style.width = "50px"
    searchInput.style.display = 'none';
    setTimeout(() => { cityName.style.display = 'flex'; }, 400)

})


const apikey = "ec2a3284705047ccae1152501230510"
const apiURL = "https://api.weatherapi.com/v1/forecast.json?"
const searchBox = document.querySelector(".search") as HTMLInputElement

export async function checkWeather(city: string) {
    const response = await fetch(apiURL + `key=${apikey}` + "&q=" + city + "&days=7&aqi=yes")
    let data = await response.json();
    console.log(data);

    document.querySelector(".city")!.innerHTML = data.location.name;
    document.querySelector(".degrees")!.innerHTML = data.current.temp_c.toFixed(0) + "°";
    document.querySelector(".feels-like-degrees")!.innerHTML = data.current.feelslike_c + "°";
    document.querySelector(".weather-status")!.innerHTML = data.current.condition.text;

    getTimeZone(data.name);

    document.querySelector(".real-feel")!.innerHTML = data.forecast.forecastday[0].day.avgtemp_c;
    document.querySelector(".wind")!.innerHTML = data.forecast.forecastday[0].day.maxwind_mph;
    document.querySelector(".chance-of-rain")!.innerHTML = data.forecast.forecastday[0].day.daily_chance_of_rain + "%";
    document.querySelector(".uv-index")!.innerHTML = data.forecast.forecastday[0].day.uv;
    let so2 = data.forecast.forecastday[0].day.air_quality.so2;
    let newSo2 = so2.toFixed(1);
    document.querySelector(".so2")!.innerHTML = newSo2;
    let o3 = data.forecast.forecastday[0].day.air_quality.o3;
    let newO3 = o3.toFixed(1);
    document.querySelector(".o3")!.innerHTML = newO3;


    const dateArray = data.forecast.forecastday
    const days = dateArray.map((day: any) => day.date_epoch)

    const degreeArray = data.forecast.forecastday
    const degree = degreeArray.map((degree: any) => degree.day.avgtemp_c)

    const forecastWeatherArray = data.forecast.forecastday
    const forecastWeatherIcons = forecastWeatherArray.map((icon: any) => icon.day.condition.text)

    const humidityArray = data.forecast.forecastday
    const humidity = humidityArray.map((humidity: any) => humidity.day.avghumidity)
    console.log(humidity);




    const forecastDay = document.querySelectorAll(".day")
    const forecastMonth = document.querySelectorAll(".date")
    const degrees = document.querySelectorAll(".degree-day")
    const forecastWeatherIconElement = document.querySelectorAll<any>(".weather-forecast-icon")
    const humidityDiv = document.querySelectorAll(".humidity")
    const humidityStatus = document.querySelectorAll(".heat-status")

    for (let i = 0; i < forecastDay.length; i++) {
        forecastDay[i].innerHTML = dayConverter(days[i]);
    }
    for (let i = 0; i < forecastMonth.length; i++) {
        forecastMonth[i].innerHTML = monthConverter(days[i]);
    }

    for (let j = 0; j < degrees.length; j++) {
        degrees[j].innerHTML = degree[j].toFixed(0) + "°"
    }

    for (let i = 0; i < forecastWeatherIconElement.length; i++) {
        weatherPicturesIcon(forecastWeatherIcons[i], forecastWeatherIconElement[i])
    }
    for (let i = 0; i < humidityStatus.length; i++) {
        humidityStatus[i].innerHTML = humidity[i]
        if (humidity[i] <= 75) {
            humidityDiv[i].classList.add("low")
        } else if (humidity[i] > 75 && humidity[i] <= 90) {
            humidityDiv[i].classList.add("medium")
        } else {
            humidityDiv[i].classList.add("high")
        }
    }



    const weatherPictureElement = document.querySelector(".weather-icon") as HTMLSourceElement;
    const weatherIcon = data.current.condition.text

    weatherPicturesIcon(weatherIcon, weatherPictureElement)



}




search.addEventListener("click", searchBoxOpen)

let dayContainerSelected = document.querySelectorAll(".day-container")!;
for (let i = 0; i < dayContainerSelected.length; i++) {
    dayContainerSelected[i].addEventListener("click", () => {
        let current = document.getElementsByClassName("selected-day");
        current[0].className = current[0].className.replace("selected-day", "");
        dayContainerSelected[i].className += " selected-day";
    });
}

