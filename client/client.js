const app = new Vue({
  el: '#app',
  data: {
    messageList: [],
    userList: [],
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
          username: this.username,
          channelId: this.channelId,
        })
      );
    },
    sendMessage() {
      this.ws.send(
        JSON.stringify({
          event: 'message',
          username: this.username,
          channelId: this.channelId,
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
      if (obj.event === 'message') {
        this.messageList.push(obj);
      } else {
        this.userList.push(obj);
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
