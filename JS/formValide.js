// eslint-disable-line
const formelement = document.getElementsByTagName('form');
const name = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');

formelement[0].addEventListener('input', () => {
  const data = {
    username: name.value,
    useremail: email.value,
    usermessage: message.value,
  };
  localStorage.setItem('userInput', JSON.stringify(data));
});

window.addEventListener('load', () => {
  const data = JSON.parse(localStorage.getItem('userInput'));
  name.value = data.username;
  email.value = data.useremail;
  message.value = data.usermessage;
});