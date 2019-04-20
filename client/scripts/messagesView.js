var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    var chats = this.$chats
    console.log(chats);
  },

  
    renderMessage: function(message) {
      
      var myMessage = MessageView.render(message);
      
      this.$chats.append(myMessage);
  
      this.$chats.find('.username').on('click',function(){
        Friends.toggleStatus();
      })
    
  }

  
};

