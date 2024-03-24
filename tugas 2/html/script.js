let timerInterval;
let running = false;
let startTime;
let elapsedTime = 0;

const timerDisplay = document.getElementById('timer');
const startPauseButton = document.getElementById('startPause');
const stopButton = document.getElementById('stop');
const flagButton = document.getElementById('flag');
const notesList = document.getElementById('notesList');

startPauseButton.addEventListener('click', function () {
    if (!running) {
        startTimer();
    } else {
        pauseTimer();
    }
});

stopButton.addEventListener('click', function () {
    stopTimer();
});

flagButton.addEventListener('click', function () {
    flagTime();
});

function startTimer() {
    running = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
    startPauseButton.textContent = 'Pause';
}

function pauseTimer() {
    running = false;
    clearInterval(timerInterval);
    startPauseButton.textContent = 'Start';
}

function stopTimer() {
    running = false;
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateTimer();
    startPauseButton.textContent = 'Start';
    timerDisplay.textContent = '00:00.000'; // Set the timer display back to 00:00.000
}

function flagTime() {
    const currentTime = getFormattedTime(elapsedTime);
    const noteItem = document.createElement('li');
    noteItem.textContent = currentTime;
    notesList.appendChild(noteItem);
}

function updateTimer() {
    if (running) {
        const currentTime = Date.now();
        elapsedTime = currentTime - startTime;
        timerDisplay.textContent = getFormattedTime(elapsedTime);
    }
}

function getFormattedTime(timeInMilliseconds) {
    const totalMilliseconds = Math.floor(timeInMilliseconds);
    const minutes = Math.floor(totalMilliseconds / (1000 * 60));
    const seconds = Math.floor((totalMilliseconds % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((totalMilliseconds % 1000));

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMilliseconds = String(milliseconds).padStart(3, '0');

    return `${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
}
