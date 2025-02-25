let timer;
let minutes = 15;
let seconds = 0;
let isPaused = false;
let enteredTime = null;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(minutes, seconds);

    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        alert('Time is up! Take a break.');
    } else if (!isPaused) {
        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            minutes--;
        }
    }
}

function formatTime(minutes, seconds) {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function togglePauseResume() {
    const pauseResumeButton = document.getElementById('pause-btn');
    isPaused = !isPaused;

    if (isPaused) {
        clearInterval(timer);
        pauseResumeButton.textContent = 'Resume';
    } else {
        startTimer();
        pauseResumeButton.textContent = 'Pause';
    }
}

function playTimer() {
    if (isPaused) {
        startTimer();
        isPaused = false;
        document.getElementById('pause-btn').textContent = 'Pause';
    }
}

function restartTimer() {
    clearInterval(timer);
    minutes = enteredTime || 15;
    seconds = 0;
    isPaused = false;
    const timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(minutes, seconds);
    const pauseResumeButton = document.querySelector('.control-buttons button');
    pauseResumeButton.textContent = 'Pause';
    startTimer();
}

function chooseTime() {
    const newTime = prompt('Enter new time in minutes:');
    if (!isNaN(newTime) && newTime > 0) {
        enteredTime = parseInt(newTime);
        minutes = enteredTime;
        seconds = 0;
        clearInterval(timer);
        isPaused = true; // prevent timer from auto starting
        const timerElement = document.getElementById('timer');
        timerElement.textContent = formatTime(minutes, seconds);
        document.getElementById('pause-btn').textContent = 'Pause';
        // Removed automatic startTimer() call here.
    } else {
        alert('Invalid input. Please enter a valid number greater than 0.');
    }
}

// Initialize the timer display on page load
document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(minutes, seconds);
    startTimer();
});