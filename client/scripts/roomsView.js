var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', Rooms.add);
  },

<<<<<<< HEAD
  renderRoom: function(newRoom) {
    var text = '<div class="room"><%= newRoom %></div>';
    this.$select.append(text);



  }
};  
=======

  
 renderRoom: function(roomname) {
    // Prevent XSS by escaping with DOM methods
    var $option = $('<option/>').val(roomname).text(roomname);

    // Add to select
    RoomsView.$select.append($option);
  },
};
>>>>>>> solo1
