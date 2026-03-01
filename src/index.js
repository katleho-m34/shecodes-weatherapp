 function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#weather-app-city");
    cityElement.innerHTML = searchInput.value;
 }

 let searchFormElement = document.querySelector("#search-form");
 searchFormElement.addEventListener("submit", handleSearchSubmit);

 let apiKey = "803006a9ef2843o8c3b4c01a1t50317b";
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=metric`;

 