const API_KEY = "7cb3e4e13b13a86b3bc3ce4fb30d9b82";

const form = document.querySelector("#form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
  weather.innerHTML = "Loading...";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();
  return showWeather(data);

};

const showWeather = (data) => {
  if (data.cod === "404") {
    weather.innerHTML = "<h3>City not found</h3>";
    return;
  }
  weather.innerHTML = `
    <div>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}" />
    </div>
    <div>
      <h2>${data.main.temp} ⁰C</h2>
      <h4>${data.weather[0].main}</h4>
    </div> `;
};

form.addEventListener("submit", function(e) {
  e.preventDefault();
  getWeather(search.value);
});
