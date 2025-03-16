const apiKey = 'caebb68c6d7e86fd48df71e626361031';
const weatherForm = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const weatherResult = document.getElementById('weather-result');

weatherForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const cityName = cityInput.value;
    getWeatherData(cityName);
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.cod === 200) {
            displayWeatherData(data);
        } else {
            weatherResult.innerHTML = `<p>City not found. Please try again.</p>`;
        }
    } catch (error) {
        weatherResult.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
    }
}

function displayWeatherData(data) {
    const { name, main, weather, wind } = data;
    weatherResult.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p><strong>Temperature:</strong> ${main.temp}°C</p>
        <p><strong>Humidity:</strong> ${main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
        <p><strong>Condition:</strong> ${weather[0].description}</p>
    `;
}
