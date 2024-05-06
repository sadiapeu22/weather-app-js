const apiKey = "cff5e2790dc32f3dad15b3ff9dd1665e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather? units=metric&q=canada";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}
checkWeather();