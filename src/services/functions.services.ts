import { checkWeather } from "../typescript.js";

export function searchBoxOpen(e: Event) {
    const searchBox = document.querySelector(".search") as HTMLInputElement
    if (searchBox.value === "") {
        e.preventDefault();
    } else {
        checkWeather(searchBox.value)
        searchBox.value = "";
    }

}

export function dayConverter(day: number) {
    let dateConvert = new Date(day * 1000)
    let dayName = dateConvert.toDateString().slice(0, 3)
    return dayName
}
export function monthConverter(day: number) {
    let dateConvert = new Date(day * 1000)
    let monthName = dateConvert.toDateString().slice(4, 10)
    return monthName
}

export function weatherPicturesIcon(weatherText: string, weatherPictureElement: HTMLSourceElement) {
    if (weatherText == "Sunny" || weatherText == "Clear") {
        weatherPictureElement.src = "../img/Weather Icons/sun.png"
    } else if (weatherText == "Patchy rain possible" || weatherText == "Light rain") {
        weatherPictureElement.src = "../img/Weather Icons/rain.png"
    } else if (weatherText == "snow") {
        weatherPictureElement.src = "../img/Weather Icons/snow.png"
    } else if (weatherText == "Overcast") {
        weatherPictureElement.src = "../img/Weather Icons/sun-rain.png"
    } else {
        weatherPictureElement.src = "../img/Weather Icons/sun-cloud.png"
    }
}

export function humidityStatus(humidityElement: any, humidityDiv: any) {
    if (humidityElement <= 50) {
        humidityDiv.classList.add("low")
    } else if (humidityElement > 50 && humidityElement <= 100) {
        humidityDiv.classList.add("medium")
    } else {
        humidityDiv.classList.add("high");
    }


}