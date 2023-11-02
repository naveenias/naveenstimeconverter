let hoursEl = document.getElementById("hoursInput");
let minuteEl = document.getElementById("minutesInput");
let buttonEl = document.getElementById("convertBtn");
let secondsEl = document.getElementById("timeInSeconds");
let errorEl = document.getElementById("errorMsg");


function convert() {
    let hours = parseInt(hoursEl.value);
    let minutes = parseInt(minuteEl.value);
    if (hoursEl.value === "") {
        errorEl.textContent = "Please enter a valid number of hours";
    } else if (minuteEl.value === "") {
        errorEl.textContent = "Please enter valid number of minutes";
    } else {
        let total = (hours * 60) + minutes;
        let seconds = total * 60;
        secondsEl.textContent = seconds;
    }
}




buttonEl.addEventListener("click", convert)