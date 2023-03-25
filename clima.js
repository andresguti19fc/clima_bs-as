const apiKey = "09484e0bab7ad04b9c6617b5b5600e0d";
const city = "Buenos Aires";

const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const cityElement = document.querySelector(".city");
const dateElement = document.querySelector(".date");

function updateWeather() {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

	.then(response => response.json())
	.then(data => {
        console.log(data.main.temp.toFixed(1))
		temperature.textContent = `${data.main.temp.toFixed(1)} °C`;
        description.textContent = data.weather[0].description;
        cityElement.textContent = data.name;
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = date.toLocaleDateString('en-US', options);
        
    // Add/remove classes based on weather conditions
    if (data.weather[0].main === 'Rain') {
        document.body.classList.add('rainy');
      } else {
        document.body.classList.remove('rainy');
      }
	})
	.catch(error => console.log(error));
}



    setInterval(updateWeather, 1000);