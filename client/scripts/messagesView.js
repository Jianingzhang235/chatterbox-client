    
var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  	Messages
  	.items()
  	// .filter(Room.isSelected(message))
    .each((message) => {
      var $message = MessageView.render(message);
      MessagesView.$chats.prepend($message);

    });
  }

};


