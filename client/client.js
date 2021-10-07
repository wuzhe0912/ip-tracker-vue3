const ws = new WebSocket('ws://127.0.0.1:3000');

ws.onopen = function () {
  console.log(`open : ${ws.readyState}`);
};

// Step1 : client-side send message
const sendBtn = document.querySelector('.send-btn');
sendBtn.addEventListener('click', () => {
  const inputValue = document.querySelector('.input-message').value;
  ws.send(inputValue);
  document.querySelector('.input-message').value = '';
});

// Step4 : received message and render in HTML
ws.onmessage = function (event) {
  console.log(event.data);
  // let messageValue = event;
  // console.log(messageValue);
  // const messageWrapper = document.querySelector('.message-wrapper');
  // messageWrapper.innerHTML = `
  //   <li class="message-list">${messageValue}</li>
  // `;
};

// // 當連結關閉時，主動觸發 close event
// ws.onclose = function (event) {
//   console.log(`close : ${ws.readyState}`);
// };
// ws.onerror = function () {
//   console.log(`error : ${ws.readyState}`);
// };
