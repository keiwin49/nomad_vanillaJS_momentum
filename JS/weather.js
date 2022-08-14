

const WEATHER_API_KEY = "10a4382d1ff333617a76c92551d0fb16";

function onGeoOk(location) {
    const lat = location.coords.latitude;
    const lng = location.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            const weatherIconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${weatherIconCode}.png`;
            const weatherIcon = document.createElement("img");

            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            weatherIcon.src = iconUrl;
            weather.appendChild(weatherIcon);
    });

}

function onGeoError() {
    alert("Can't find your location. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
