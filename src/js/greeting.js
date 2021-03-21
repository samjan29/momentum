const greetingForm = document.querySelector(".js-greetingForm"),
  greetingInput = greetingForm.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleGreetingSubmit(event) {
  event.preventDefault();
  const currentValue = greetingInput.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  greetingForm.classList.add(SHOWING_CN);
  greetingForm.addEventListener("submit", handleGreetingSubmit);
}

function paintGreeting(text) {
  greetingForm.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours < 11) {
    greeting.innerText = `Good morning, ${text}.`;
  } else if (hours >= 11 && hours < 17) {
    greeting.innerText = `Good afternoon, ${text}.`;
  } else if (hours >= 17 && hours < 20) {
    greeting.innerText = `Good evening, ${text}.`;
  } else {
    greeting.innerText = `Hello, ${text}.`;
  }
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
