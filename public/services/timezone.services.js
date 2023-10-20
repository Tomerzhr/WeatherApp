var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const apikey = "fbb31a9d9f1d488dbc880da69c51d7e7";
const apiURL = "https://api.ipgeolocation.io/timezone?";
export function getTimeZone(city) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(apiURL + `apiKey=${apikey}` + "&location=" + city);
        let data = yield response.json();
        let date = data.date_time_txt;
        let cityDate = date.slice(0, 20);
        document.querySelector(".main-date").innerHTML = cityDate;
    });
}
