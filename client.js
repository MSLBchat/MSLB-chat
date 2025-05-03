const socket = io();
let username =
"";
const loginDiv =
document.getElementById('login');
[01/05 à 12:40]Chat GPT: const chatDiv =
document.getElementById('chat');
const usernameInput =
document.getElementById('username');
const joinBtn =
document.getElementById('join');
const form =
document.getElementById('form');
const input =
document.getElementById('input');
const messages =
document.getElementById('messages');
// Rejoindre le chat avec un pseudo
joinBtn.addEventListener('click'
, () => {
if (usernameInput.value.trim()) {
username =
usernameInput.value.trim();
loginDiv.style.display =
'none';
chatDiv.style.display =
'block';
}
});
// Envoyer un message
form.addEventListener('submit', function
(e) {
e.preventDefault();
if (input.value) {
const now = new Date();
const time =
now.toLocaleTimeString([], { hour: '2-digit'
,
minute: '2-digit' });
const message = {
user: username,
time: time,
text: input.value
};
socket.emit('chat message'
, message);
input.value =
'';
}
});
// Afficher un message
socket.on('chat message'
, function (msg) {
const item =
document.createElement('li');
item.innerHTML = `<strong>msg.user</
strong> [{msg.time}]: ${msg.text}`;
messages.appendChild(item);
messages.scrollTop =
messages.scrollHeight;
});