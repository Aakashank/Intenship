// Function to format time values with leading zero
function formatTime(value) {
  return value < 10 ? '0' + value : value;
}

// Function to update the clock every second
function updateClock() {
  const now = new Date();
  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());
  
  const currentTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = currentTime;
}

// Update the clock immediately and then every 1 second
updateClock();
setInterval(updateClock, 1000);
