function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'fb92555bcc86046e5cdad98911998ae7';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('temperature').innerText = `${data.main.temp}°C`;
            document.getElementById('wind').innerText = `${data.wind.speed} m/s`;
            document.getElementById('pressure').innerText = `${data.main.pressure} hPa`;
            document.getElementById('humidity').innerText = `${data.main.humidity}%`;
            document.getElementById('sunrise').innerText = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            document.getElementById('sunset').innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}

