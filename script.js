// Define functions for updating temperature and humidity
function updateTemperature() {
    const temperatureElement = document.querySelector('[data-testid="temperature"]');
    const newTemperature = Math.floor(Math.random() * 30) + 15; // Random temperature between 15°C and 45°C
    temperatureElement.textContent = `${newTemperature}°C`;
}

function updateHumidity() {
    const humidityElement = document.querySelector('[data-testid="humidity"]');
    const newHumidity = Math.floor(Math.random() * 50) + 20; // Random humidity between 20% and 70%
    humidityElement.textContent = `${newHumidity}%`;
}

// Function to update the day of the week
function updateDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDayElement.textContent = daysOfWeek[new Date().getDay()];
}

//Function for milliseconds (utc-time)
function updateUTCTime() {
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const currentUTCTimeInMilliseconds = new Date().getTime();
    utcTimeElement.textContent = currentUTCTimeInMilliseconds.toString();
}

// Function to update all data
function updateRealTimeData() {
    updateTemperature();
    updateHumidity();
    updateDayOfWeek();
    updateUTCTime();

    // Schedule the next update in 5 seconds
    setTimeout(updateRealTimeData, 5000); // 5000 milliseconds = 5 seconds
}

// Initialize real-time data updates
updateRealTimeData();
