 function displayTemperature(response) {
   let temperatureElement = document.querySelector("#current-temperature");
   let temperature = response.data.temperature.current;
   
   let cityElement = document.querySelector("#weather-app-city");
   cityElement.innerHTML = response.data.city;

   temperatureElement.innerHTML =  Math.round(temperature);
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