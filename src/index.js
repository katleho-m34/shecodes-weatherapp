 function displayTemperature(response) {
   let temperatureElement = document.querySelector("#current-temperature");
   let temperature = response.data.temperature.current;
   let cityElement = document.querySelector("#weather-app-city");
   let descriptionElement = document.querySelector("#weather-description");
   let humidityElement = document.querySelector("#humidity");
   let windElement = document.querySelector("#wind");
   let iconElement = document.querySelector("#icon");

   windElement.innerHTML = `${response.data.wind.speed} km/h`;
   humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
   cityElement.innerHTML = response.data.city;
   temperatureElement.innerHTML =  Math.round(temperature);
   icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon">`;
   descriptionElement.innerHTML = response.data.condition.description;

 }

 function searchCity(city) {
    let apiKey = "803006a9ef2843o8c3b4c01a1t50317b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
 }
 
 function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    
    searchCity(searchInput.value);
 }

 let searchFormElement = document.querySelector("#search-form");
 searchFormElement.addEventListener("submit", handleSearchSubmit);

 let now = new Date();

 let dateElement = document.querySelector("#date");
 let days = [
   "Sunday", 
   "Monday", 
   "Tuesday", 
   "Wednesday", 
   "Thursday", 
   "Friday", 
   "Saturday"
   ];

 let day = days[now.getDay()];

 let hours = now.getHours();
 let minutes = now.getMinutes();

 dateElement.innerHTML = `${day} ${hours}:${minutes},`;

 function displayForecast() {

  let days = ['Thur', 'Fri', 'Sat', 'Sun', 'Mon'];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml = 
    forecastHtml +
    `
    <div class="forecast-day">
       <div class="forecast-date">${day}</div>
       <div class="forecast-icon">🌤️</div>
       <div class="forecast-temperatures">
        <div class="forecast-temperature"><strong>22°</strong></div>
        <div class="forecast-temperature">15°</div>
        </div>
       </div>
       `;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
 }
 
  displayForecast();