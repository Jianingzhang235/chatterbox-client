    
var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    var chats = this.$chats;
    console.log(chats);
  },

<<<<<<< HEAD
  
  renderMessage: function(message) {
    
    var myMessage = MessageView.render(message);
    
    this.$chats.append(myMessage);

    this.$chats.find('.username').on('click',function(){
      Friends.toggleStatus();
    });
    
  }

  
};

=======
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
