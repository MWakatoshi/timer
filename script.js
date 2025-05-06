const btnStartName = ".button__start";
const btnStopName = ".button__stop";
const inputHoursName = "#hours";
const inputMinutesName = "#minutes";
const inputSecondsName = "#seconds";

const btnStart = document.querySelector(btnStartName);
const btnStop = document.querySelector(btnStopName);
const inputHours = document.querySelector(inputHoursName);
const inputMinutes = document.querySelector(inputMinutesName);
const inputSeconds = document.querySelector(inputSecondsName);


let intervalId;
let hours;
let minutes;
let seconds;
let allSeconds;


function startTimer(event) {
    event.preventDefault();

    hours = parseInt(inputHours.value);
    minutes = parseInt(inputMinutes.value);
    seconds = parseInt(inputSeconds.value);
    allSeconds = hours * 3600 + minutes * 60 + seconds;

    hideElement(btnStart);
    showElement(btnStop);
    document.documentElement.requestFullscreen();
    
    intervalId = setInterval(updateTimer, 300);
}


function updateTimer() {
    if (allSeconds > 0) {
        allSeconds--;

        
    
        hours = Math.floor(allSeconds / 3600);
        minutes = Math.floor(allSeconds % 3600 / 60);
        seconds = Math.floor(allSeconds % 3600 % 60);
        
        inputHours.value = hours.toString().padStart(2, "0");
        inputMinutes.value = minutes.toString().padStart(2, "0");
        inputSeconds.value = seconds.toString().padStart(2, "0");
    } else {
        stopTimer();
    }

}


function stopTimer() {
    clearInterval(intervalId);

    setTimeout(() => {
        btnStop.computedStyleMap.opacity = 0.5;
    }, 2200)
    showElement(btnStart);
    hideElement(btnStop);
    document.exitFullscreen();
}

function showElement(element) {
    element.classList.remove("hide");
}

function hideElement(element) {
    element.classList.add("hide");
}

btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);






