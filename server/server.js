const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
  // Step2 : received client-side message
  ws.on('message', function (message) {
    let buf = Buffer.from(message);
    let data = buf.toString();
    // Step3 : Forward to client-side
    ws.send(data);
  });
});
