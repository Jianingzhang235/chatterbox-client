var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB || function(succes){
        console.error('chatterbox: Success! Your message was sent', success);
      },
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to send messages', error);
      }
    });
    // todo: save a message to the server
    // This has to look exactly like the one before but it's a post
    // data has to be stringified and the data input should be (message)
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
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