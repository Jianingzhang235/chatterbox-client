var Messages = {
  username: 'Mel Brooks',
  text: 'It\'s good to be the king',
  roomname: 'lobby'
};

<<<<<<< HEAD
=======
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
	for(var message of messages) {
 Messages._data[message.objectId] = Messages._conform(message);
}
callback();
},

_conform: function(message) {
	message.text = message.text || '';
	message.username = message.username || '';
	message.roomname = message.roomname || '';
	return message;

}


};
>>>>>>> solo1
