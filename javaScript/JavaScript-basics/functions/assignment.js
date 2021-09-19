const task3Element = document.getElementById('task-3');
const USERNAME = 'Everson';
const PHRASE1 = 'Hello';
const PHRASE2 = ', ';
const PHRASE3 = 'World!';

function showText() {
  alert('Hello!');
}

function showName(username) {
  alert(`Hello, ${username}!`);
}

function concatStrings(phrase1, phrase2, phrase3) {
  alert(phrase1 + phrase2 + phrase3);
}

showText();
showName(USERNAME);
concatStrings(PHRASE1, PHRASE2, PHRASE3);

task3Element.addEventListener('click', showText);
