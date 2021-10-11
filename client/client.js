const app = new Vue({
  el: '#app',
  data: {
    list: [],
    message: '',
    ws: {},
    username: '',
    channelId: 'Public',
    isShow: true,
    onlineNum: '',
  },

  mounted() {
    this.ws = new WebSocket('ws://127.0.0.1:3000');
    this.ws.onopen = this.onOpen;
    this.ws.onmessage = this.onMessage;
    this.ws.onclose = this.onClose;
    this.ws.onerror = this.onError;
  },

  methods: {
    logingChat() {
      if (this.username.trim() === '') {
        alert('請輸入姓名');
        return;
      }
      this.isShow = false;
      this.ws.send(
        JSON.stringify({
          event: 'login',
          message: this.username,
          channelId: this.channelId,
        })
      );
    },
    sendMessage() {
      this.list.push(this.message);
      this.ws.send(
        JSON.stringify({
          event: 'message',
          message: this.message,
        })
      );
      this.message = '';
    },
    onOpen() {
      console.log(`open : ${this.ws.readyState}`);
    },
    onMessage(event) {
      let obj = JSON.parse(event.data);
      this.onlineNum = obj.num;
      if (obj.event === 'login') {
        this.list.push(`Welcome : ${obj.message} enter chat!`);
      } else {
        if (obj.name !== this.name) {
          this.list.push(obj.message);
        }
      }
    },
    onClose() {
      console.log(`close : ${this.ws.readyState}`);
    },
    onError() {
      console.log(`error : ${this.ws.readyState}`);
    },
  },
});
