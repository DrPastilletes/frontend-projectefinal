let app = require('express')();
let server = require('http').createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["*"]
  }
});

io.on('connection', (socket) => {

  socket.on('disconnect', function(){
    io.emit('users-changed', {user: socket.username, event: 'left'});
  });

  socket.on('set-name', (name) => {
    socket.username = name;
    io.emit('users-changed', {user: name, event: 'joined'});
  });

  socket.on('set-order', (order) => {
    socket.order = order;
    io.emit('order-sent', {order: order, event: 'send-order'});
  });

  socket.on('send-message', (message) => {
    io.emit('message', {msg: message.text, user: socket.username, createdAt: new Date()});
  });
});

server.listen(3000, function(){
  console.log('listening in http://localhost:' + 3000);
});
