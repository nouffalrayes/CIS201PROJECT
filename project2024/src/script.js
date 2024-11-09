let countdownInterval; // interval id

// menu function
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// function to start the countdown
function startCountdown() {
    const daysInput = document.getElementById('days').value;
    const totalSeconds = daysInput * 24 * 60 * 60; // convert days to seconds
    let remainingTime = totalSeconds; // initialize remaining time

    // clear countdown
    clearInterval(countdownInterval);

    // update display immediately
    updateCountdownDisplay(remainingTime);

    // begin countdown
    countdownInterval = setInterval(() => {
        remainingTime--; // decrement remaining time by 1 second

        if (remainingTime <= 0) {
            clearInterval(countdownInterval); // stop countdown when it reaches 0
            document.getElementById('countdownDisplay').textContent = "Countdown Complete!";
        } else {
            updateCountdownDisplay(remainingTime); // update display
        }
    }, 1000); // update every second
}

// countdown display update function
function updateCountdownDisplay(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    // update display with formatted time
    document.getElementById('countdownDisplay').textContent =
        `${days} Days, ${hours} Hours, ${minutes} Minutes, ${remainingSeconds} Seconds`;
}

