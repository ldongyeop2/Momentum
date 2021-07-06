const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector(".name");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem('user');
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem('user', username);
  paintingGreetings();  // localStorage에 있는 'user'의 키값을 확인하고 null인 경우 재입력, 아닌경우 greeting을 show
}

function paintingGreetings() {
  const username = localStorage.getItem('user');
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function init() {
  loginForm.addEventListener("submit", onLoginSubmit);

  if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    paintingGreetings();
  }
}
init();
