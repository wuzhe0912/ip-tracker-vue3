const ws = new WebSocket('ws://127.0.0.1:3000');

// keep listen
ws.onopen = function () {
  // send to server-side
  console.log(`open : ${ws.readyState}`);
  ws.send('Hello Server!');
};
ws.onmessage = function (event) {
  console.log(`message : ${ws.readyState}`);
  console.log(event);
};
// 當連結關閉時，主動觸發 close event
ws.onclose = function (event) {
  console.log(`close : ${ws.readyState}`);
};
ws.onerror = function () {
  console.log(`error : ${ws.readyState}`);
};
// client-side close ws
const closeBtn = document.getElementById('btn');
closeBtn.addEventListener('click', () => {
  ws.close();
});
