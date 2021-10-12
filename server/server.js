const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function (data) {
    const bufferData = Buffer.from(data).toString();
    let formData = JSON.parse(bufferData);
    ws.channelId = formData.channelId;
    ws.username = formData.username;

    wss.clients.forEach((client) => {
      if (
        client.readyState === WebSocket.OPEN &&
        client.channelId === ws.channelId
      ) {
        formData.num = wss.clients.size;
        client.send(JSON.stringify(formData));
      }
    });
  });

  ws.on('close', (data) => {
    let formData = {};
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN && ws.username) {
        formData.event = 'out';
        formData.num = wss.clients.size;
        formData.username = ws.username;
        client.send(JSON.stringify(formData));
      }
    });
  });
});
