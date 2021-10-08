const app = new Vue({
  el: '#app',
  data: {
    list: [],
    message: '',
    ws: {},
  },

  mounted() {
    this.ws = new WebSocket('ws://127.0.0.1:3000');
    this.ws.onopen = this.onOpen;
    this.ws.onmessage = this.onMessage;
    this.ws.onclose = this.onClose;
    this.ws.onerror = this.onError;
  },

  methods: {
    onOpen() {
      console.log(`open : ${this.ws.readyState}`);
    },
    onMessage(event) {
      console.log(1, event.data);
      this.list.push(event.data);
    },
    onClose() {
      console.log(`close : ${this.ws.readyState}`);
    },
    onError() {
      console.log(`error : ${this.ws.readyState}`);
    },
    sendMessage() {
      console.log(2, this.message);
      this.list.push(this.message);
      this.ws.send(this.message);
      this.message = '';
    },
  },
});
