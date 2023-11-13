import { checkWeather } from "../typescript.js";
export function searchBoxOpen(e) {
    const searchBox = document.querySelector(".search");
    if (searchBox.value === "") {
        e.preventDefault();
    }
    else {
        checkWeather(searchBox.value);
        searchBox.value = "";
    }
}
export function dayConverter(day) {
    let dateConvert = new Date(day * 1000);
    let dayName = dateConvert.toDateString().slice(0, 3);
    return dayName;
}
export function monthConverter(day) {
    let dateConvert = new Date(day * 1000);
    let monthName = dateConvert.toDateString().slice(4, 10);
    return monthName;
}
export function weatherPicturesIcon(weatherText, weatherPictureElement) {
    if (weatherText == "Sunny" || weatherText == "Clear") {
        weatherPictureElement.src = "../img/Weather Icons/sun.png";
    }
    else if (weatherText == "Patchy rain possible" || weatherText == "Light rain") {
        weatherPictureElement.src = "../img/Weather Icons/rain.png";
    }
    else if (weatherText == "snow") {
        weatherPictureElement.src = "../img/Weather Icons/snow.png";
    }
    else if (weatherText == "Overcast") {
        weatherPictureElement.src = "../img/Weather Icons/sun-rain.png";
    }
    else {
        weatherPictureElement.src = "../img/Weather Icons/sun-cloud.png";
    }
}
