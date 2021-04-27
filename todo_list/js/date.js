const clockContainer = document.querySelector(".background--date"),
    clockTitle = document.querySelector(".background--date__value");

var dayInMilliSeconds = 1000 * 60 * 60 * 24;

const dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

function getTime() {
    const date = new Date();
    const years = date.getFullYear();
    const months = date.getMonth();
    const days = date.getDate();
    const day = date.getDay();
    clockTitle.innerText = `${years}.${months < 10 ? `0${months}` : months}.${
        days < 10 ? `0${days}` : days
    }, ${dayName[day]}`;
}
function init() {
    getTime();
    setInterval(getTime, dayInMilliSeconds);
}

init();
