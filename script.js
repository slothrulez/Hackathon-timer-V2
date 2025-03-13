let timeLeft = 24 * 3600 + 0 * 60 + 0; // _ hours, _ minutes, _ seconds

function updateTimer() {
  if (timeLeft <= 0) {
    clearInterval(timer);
    timerEnded();
    return;
  }
  timeLeft--;
  updateDisplay();
}

function updateDisplay() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  document.getElementById('timer').textContent =
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function timerEnded() {
  document.body.classList.add('timer-ended');
}

const timer = setInterval(updateTimer, 1000);
updateDisplay();