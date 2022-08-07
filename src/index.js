function formatDate(date) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekDays[date.getDay()];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day}, ${hours}:${minutes}`;
}

// function convertTemp() {
//   let curTemperature = document.querySelector("#curTemperature");
//   curTemperature.innerHTML = 456;
// }
// function reverse() {
//   let curTemperature = document.querySelector("#curTemperature");
//   curTemperature.innerHTML = 14;
// }

// let celsius = document.querySelector("#celsius-link");
// let fahrenheit = document.querySelector("#fahrenheit-link");

// fahrenheit.addEventListener("click", convertTemp);
// celsius.addEventListener("click", reverse);

function showTemperature(response) {
  document.querySelector("#curTemperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#city").innerHTML = response.data.name;
}

function search(event) {
  event.preventDefault();
  let apiKey = "9eac4e24a0395af74f4f42db37f3b31b";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function current(position) {
  let apiKey = "9eac4e24a0395af74f4f42db37f3b31b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(current);
}
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#searchCity");
searchForm.addEventListener("submit", search);

let currentButton = document.querySelector("#currentButton");
currentButton.addEventListener("click", getCurrentLocation);
