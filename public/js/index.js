var socket = io();

socket.on('connect',function(){
  console.log('Connected to the server');

  // socket.emit('createMessage',{
  //   from:'Ilan',
  //   text:'Yup,that works for me'
  // });
  //
  // socket.emit('createEmail',{
  //   to:'AdeleGrace@example.com',
  //   text:'Hi.This is Ilan'
  // });
});
socket.on('disconnect',function() {
 console.log('Disconnected from the server');
});
socket.on('newMessage',function(message) {
  console.log('newMessage',message);
});
// socket.on('newEmail', function(email) {
//   console.log('New email',email);
// });
socket.emit('createMessage',{
  from:'Frank',
  text: 'Hi'
},function(data){
  console.log('Got it',data);
});

jquery(#message-form).on('submit',function(e){
  e.preventDefault();
});
socket.emit('createMessage',{
  from:'User',
  text: jQuery('[name=message]').val()
},function(data){
  console.log('Got it',data);
});
});

var geolocation = jQuery('#send-location');
locationButton.on('click',function() {
    if(! Navigator.geolocation){
      return alert ('Geolocation not supported by your Browser!');
    }
    Navigator.geolocation.getCurrentPosition(function(position){
    socket.emit('createMessage',{
      latitude:position.coords.latitude,
      longitude:position.coords.longitude
      });
    },function(){
         alert('Unable to fetch location');
   });
  });
