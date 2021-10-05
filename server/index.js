const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
  // reviced client-side
  ws.on('message', function (msg) {
    console.log(`server : ${msg}`);
  });
  // send to client-side
  ws.send('Message from server');
});
