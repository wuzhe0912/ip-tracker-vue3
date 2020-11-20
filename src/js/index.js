// websocket test
const websocket = new WebSocket('ws://echo.websocket.org/');
websocket.onopen = function() {
  console.log('websocket open');
  document.querySelector('.receive-text').innerHTML = 'Connected';
}
websocket.onclose = function() {
  console.log('websocket close')
}
websocket.onmessage = function(element) {
  console.log(element.data);
  document.querySelector('.receive-text').innerHTML = element.data;
}
document.querySelector('.send-btn').onclick = function() {
  const text = document.querySelector('.send-text').value;
  websocket.send(text)
}