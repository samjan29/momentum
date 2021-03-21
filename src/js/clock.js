const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1"),
  clockDate = clockContainer.querySelector("span");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const H = `${hours < 10 ? `0${hours}` : hours}`;
  const M = `${minutes < 10 ? `0${minutes}` : minutes}`;
  const S = `${seconds < 10 ? `0${seconds}` : seconds}`;
  clockTitle.innerText = `${H}:${M}:${S}`;
}

function getDate() {
  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const years = currentDate.getFullYear();
  const months = monthNames[currentDate.getMonth()];
  const dates = currentDate.getDate();
  const D = `${dates < 10 ? `0${dates}` : dates}`;
  const days = dayNames[currentDate.getDay()];
  clockDate.innerText = `${years} ${months} ${D} ${days}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  getDate();
  setInterval(getDate, 1000);
}

init();
