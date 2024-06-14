const input = document.getElementById('nome');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');
const errorElement = document.getElementById('error');

const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  event.preventDefault();


  localStorage.setItem('player', input.value);
  window.location = "game.html";
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);