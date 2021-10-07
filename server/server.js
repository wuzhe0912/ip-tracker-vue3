const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
  // Step2 : received client-side message
  ws.on('message', function (message) {
    const bufferMessage = Buffer.from(message).toString();
    // Step3 : Forward to client-side
    wss.clients.forEach((client) => {
      client.send(bufferMessage);
    });
  });
});
