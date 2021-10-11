const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function (message) {
    const bufferMessageObj = Buffer.from(message).toString();
    let formData = JSON.parse(bufferMessageObj);
    formData.num = wss.clients.size;
    ws.channelId = formData.channelId;

    wss.clients.forEach((client) => {
      if (
        client.readyState === WebSocket.OPEN &&
        client.channelId === ws.channelId
      ) {
        client.send(JSON.stringify(formData));
      }
    });
  });
});
