var Messages = {

  _data: {},

  items: function() {
    return _.chain(Messages._data);
  },

  add: function(message, callback = () => {}) {
    debugger;
    Messages._data[message.objectId] = message;
    callback();
  },

  update: function(messages, callback = () => {}) {
    var length = Object.keys(Messages._data).length;

    for (let message of messages) {
      Messages._data[message.objectId] = Messages._conform(message);
    }

    // only invoke the callback if something changed
    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
  },

  _conform: function(message) {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }

};
