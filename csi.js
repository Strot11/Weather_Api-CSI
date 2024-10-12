async function getWeather() {
    const city = document.getElementById('cityName').value;
    const apiKey = '7da2323284d33b4d3fd01ab120ab747f'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const butt = document.querySelector("button");
    try {
        const response = await fetch(apiUrl); // Fetch weather data from OpenWeatherMap API
        const data = await response.json();

        if (response.ok) {
        
            document.getElementById('temperature').value = data.main.temp;  //Temperature
            document.getElementById('humidity').value = data.main.humidity; // Humidity 
            document.getElementById('climate').value = data.weather[0].description; // Weather description
            document.getElementById('wind').value=data.wind.speed;
            butt.style.backgroundColor="Green";
            butt.innerText="Successful";
        } else {
            alert('City not found. Please enter a valid city name.');
            butt.style.backgroundColor="red";
            butt.innerText="Not Found";

        }
    } catch (error) {
        alert('Error fetching weather data.');
        console.error(error);
        butt.style.backgroundColor="violet";
}}
//https://api.openweathermap.org/data/2.5/weather?q=London&appid=7da2323284d33b4d3fd01ab120ab747f
