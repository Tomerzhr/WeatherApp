const apikey = "fbb31a9d9f1d488dbc880da69c51d7e7"
const apiURL = "https://api.ipgeolocation.io/timezone?"


export async function getTimeZone(city: string) {
    const response = await fetch(apiURL + `apiKey=${apikey}`+ "&location=" + city)
    let data = await response.json()
    let date = data.date_time_txt
    let cityDate = date.slice(0, 20)
document.querySelector(".main-date")!.innerHTML = cityDate
    
}


