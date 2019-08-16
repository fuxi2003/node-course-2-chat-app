const path = require('path');
// const http = require('http');
const express = require('express');
// const socketIO = require('socket.io');

// const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;


const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);
// const users = new Users();

app.use(express.static(publicPath));
app.listen(port,()=>{
     console.log(`server is up on ${port}`);
});

// io.on('connection',(socket) => {
//   console.log('New user connected');
//   //socket.emit from admin text wel to chat app
//   socket.emit('createMessage',generateMessage('Admin','Welcome to the chat app'));
//   //socket.broadcast.emit from admin text new user joined
//   socket.broadcast.emit('createMessage',generateMessage('Admin','New user joind'));
//
//   // socket.emit('createMessage',generateMessage(message.from,message.text));
//   //
//   // socket.emit('newEmail',{
//   //   from:'ilan@example.com',
//   //   text: 'Hey,What is going on',
//   //   createAt:123
//   //   });
//   socket.on('createMessage',(message,callback) => {
//     console.log('createMessage',message);
//     io.emit('newMessage',generateMessage(message.from, message.text));
//     callback();
//     // socket.broadcast.emit('newMessage',{
//     //   from: message.from,
//     //   text: message.text,
//     //   createAt: new Date().getTime()
//     });
//   });
//   socket.on('createLocationMessage',(coords) => {
//     io.emit('newMessage',generateMessage('Admin',`${coords.latitude},${coords.longitude}`));
//   });
//
//   socket.on('createEmail',(newEmail) => {
//     console.log('createEmail',newEmail);
//   });
//
//   socket.on('disconnected',() => {
//     console.log('User was disconnected');
//   });
// });

// io.on('connection', (socket) => {
//   console.log('New user connected');
//
//   socket.on('join', (params, callback) => {
//     if (!isRealString(params.name) || !isRealString(params.room)) {
//       return callback('Name and room name are required.');
//     }
//
//     socket.join(params.room);
//     users.removeUser(socket.id);
//     users.addUser(socket.id, params.name, params.room);
//
//     io.to(params.room).emit('updateUserList', users.getUserList(params.room));
//     socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
//     socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} has joined.`));
//     callback();
//   });
//
//   socket.on('createMessage', (message, callback) => {
//     var user = users.getUser(socket.id);
//
//     if (user && isRealString(message.text)) {
//       io.to(user.room).emit('newMessage', generateMessage(user.name, message.text));
//     }
//
//     callback();
//   });
//
//   socket.on('createLocationMessage', (coords) => {
//     var user = users.getUser(socket.id);
//
//     if (user) {
//       io.to(user.room).emit('newLocationMessage', generateLocationMessage(user.name, coords.latitude, coords.longitude));
//     }
//   });
//
//   socket.on('disconnect', () => {
//     var user = users.removeUser(socket.id);
//
//     if (user) {
//       io.to(user.room).emit('updateUserList', users.getUserList(user.room));
//       io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left.`));
//     }
//   });
// });
//app.use(expressstatic(publicPath));

//console.log(_dirname+'/../public');
