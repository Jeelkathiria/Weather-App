const apiKey = "a275574da61adb43973a6094936cfd52";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const boxSearch = document.querySelector(".search input");
const searchIcon = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather img");
async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  if (response.status == 404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + " °c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/Clear.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/sun.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/Rain.png";
    } else if (data.weather[0].main == "Drizzel") {
      weatherIcon.src = "images/Drizzel.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/Mist.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}

searchIcon.addEventListener("click", () => {
  checkWeather(boxSearch.value);
});
