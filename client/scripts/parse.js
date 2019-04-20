var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

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
