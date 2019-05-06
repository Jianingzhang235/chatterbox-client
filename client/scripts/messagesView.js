
var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    var chats = this.$chats;
    console.log(chats);
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


>>>>>>> solo1
