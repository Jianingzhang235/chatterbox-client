var Parse = {

  server: `http://parse.${window.hrr}.hackreactor.com/chatterbox/classes/messages`,

<<<<<<< HEAD
  create: function(message, successCB = null, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function(data){
        console.log('chatterbox: Success! Your message was sent', data);
      },
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to send messages', error);
      }
    });
    
=======
  create: function(message, successCB, errorCB = null) {
    $.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'http://parse.hrr.hackreactor.com/chatterbox/classes/messages',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
});
    // todo: save a message to the server
>>>>>>> solo1
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
  url: 'http://parse.hrr.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB, //I will create a function just like the one below so it's usefull
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};
<<<<<<< HEAD
=======



// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }
// });


// var Parse = {

//   server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

//   create: function(message, successCB, errorCB = null) {
//     // todo: save a message to the server
//       $.ajax({
//       url: Parse.server,
//       type: 'POST',
//       data: JSON.stringify(message),
//       contentType: 'application/json',
//       success: successCB,
//       error: errorCB || function(error) {
//         console.error('chatterbox: Failed to fetch messages', error);
//       }
//     });
//   },

//   readAll: function(successCB, errorCB = null) {
//     $.ajax({
//       url: Parse.server,
//       type: 'GET',
//       data: { order: '-createdAt' },
//       contentType: 'application/json',
//       success: successCB,
//       error: errorCB || function(error) {
//         console.error('chatterbox: Failed to fetch messages', error);
//       }
//     });
//   }

// };
>>>>>>> solo1
