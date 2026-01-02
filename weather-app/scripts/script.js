const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    console.log(response);
    if (!response.ok) {
      throw document.querySelector(".error-message").style.display = "block";
      
    }
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".weather-icon").src="images/"+data.weather[0].main.toLowerCase()+".png"
  } catch (error) {
    alert(error.message);
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);

  // Add 'Enter' key functionality
  searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      checkWeather(searchBox.value);
    }
  });
});
