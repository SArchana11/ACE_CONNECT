import credentials from "./credentials.js";

const inputEmailEl = document.querySelector('.email');
const inputPasswordEl = document.querySelector('.password');
const loginbtnEl = document.getElementById('login-button');
const checkboxbtnEl = document.getElementById('checkbox');

function showPassword() {
  const passwordInput = document.getElementById('typePasswordX-2');
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

checkboxbtnEl.addEventListener('click', showPassword);

function login(event) {
  event.preventDefault(); // Prevent form submission
  let loggedIn = false;
  
  for (let i = 0; i < credentials.length; i++) {
    if (inputEmailEl.value === credentials[i].email && inputPasswordEl.value === credentials[i].password) {
      //Set the logged-in state in session storage
      sessionStorage.setItem('loggedIn',true);
      loggedIn = true;
      document.getElementById('login-anchor').setAttribute('href', './cse/index.html');
      window.location.href = './cse/index.html'; // Navigate to the page
      break;
    }
  }
  
  if (!loggedIn) {
    alert('Login has failed');
  }
}

loginbtnEl.addEventListener('click', login);

window.onload = function(){
  sessionStorage.removeItem('loggedIn');
  inputEmailEl.value = '';
  inputPasswordEl.value = '';
  history.replaceState(null, '', 'login.html');
}
