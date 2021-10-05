const ws = new WebSocket('ws://127.0.0.1:3000');

// keep listen
ws.onopen = function () {
  // send to server-side
  ws.send('Hello Server!');
};
ws.onmessage = function (event) {
  console.log(event);
};
