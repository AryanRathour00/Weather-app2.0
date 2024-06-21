const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#wind-speed");
const location_not_found = document.querySelector(".location_not_found");
const weather_body = document.querySelector(".weather-body");

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});

function checkWeather(city) {
  const api_key = "80345281fd72dd0e212cdcd1553fbae8";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onprogress = function () {
    console.log("fetching data");
  };
  xhr.onload = function () {
    let weather_data = JSON.parse(this.responseText);
    console.log(this.responseText)
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.floor(weather_data.main.temp - 273.15)}°C`;
    humidity.innerHTML = `${Math.floor(weather_data.main.humidity)}%`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/hr`;

    switch (weather_data.weather[0].main) {
      case "Clouds":
        weather_img.src = "assets/clear.png";
        break;
      case "Clear":
        weather_img.src = "assets/clear.png";
        break;
      case "Rain":
        weather_img.src = "assets/rain.png";
        break;
      case "Mist":
        weather_img.src = "assets/mist.png";
        break;
      case "Snow":
        weather_img.src = "assets/snow.png";
        break;
    }
  };
  xhr.send();
}
