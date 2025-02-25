let timer;
let minutes = 15;
let seconds = 0;
let isPaused = false;
let enteredTime = null;
let initialTotalSeconds = minutes * 60; 

// Initialize progress for ring element
const progressCircle = document.querySelector('.progress-ring__circle');
const radius = progressCircle ? progressCircle.r.baseVal.value : 0;
const circumference = 2 * Math.PI * radius;
if (progressCircle) {
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = circumference;
}

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    // Update the displayed time text
    const timerText = document.querySelector('.time-text');
    timerText.textContent = formatTime(minutes, seconds);
    
    updateProgress(); // Animating circle based on time progress

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

function updateProgress() {
    const totalSeconds = initialTotalSeconds;
    const timeLeft = minutes * 60 + seconds;
    const offset = circumference - (timeLeft / totalSeconds) * circumference;
    if (progressCircle) {
        progressCircle.style.strokeDashoffset = offset;
    }
}

function formatTime(minutes, seconds) {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function togglePauseResume() {
    const pauseResumeButton = document.getElementById('pause-btn');
    if (isPaused) {
        // If paused, start the timer and update button to 'Pause'
        startTimer();
        pauseResumeButton.textContent = 'Pause';
        isPaused = false;
    } else {
        // If running, pause the timer and update button to 'Play'
        clearInterval(timer);
        pauseResumeButton.textContent = 'Play';
        isPaused = true;
    }
}

function restartTimer() {
    clearInterval(timer);
    minutes = enteredTime || 15;
    seconds = 0;
    isPaused = false;
    initialTotalSeconds = minutes * 60; // reset total seconds
    const timerText = document.querySelector('.time-text');
    timerText.textContent = formatTime(minutes, seconds);
    document.getElementById('pause-btn').textContent = 'Pause';
    updateProgress();
    startTimer();
}

function chooseTime() {
    const newTime = prompt('Enter new time in minutes:');
    if (!isNaN(newTime) && newTime > 0) {
        enteredTime = parseInt(newTime);
        minutes = enteredTime;
        seconds = 0;
        clearInterval(timer);
        isPaused = true; //  timer stays paused
        initialTotalSeconds = minutes * 60; // update total time
        const timerText = document.querySelector('.time-text');
        timerText.textContent = formatTime(minutes, seconds);
        document.getElementById('pause-btn').textContent = 'Play';
        updateProgress();
    } else {
        alert('Invalid input. Please enter a valid number greater than 0.');
    }
}

// Initialize the timer display on page load without starting the timer automatically
document.addEventListener('DOMContentLoaded', () => {
    const timerText = document.querySelector('.time-text');
    timerText.textContent = formatTime(minutes, seconds);
    clearInterval(timer);
    isPaused = true;
    document.getElementById('pause-btn').textContent = 'Play';
});