var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', Rooms.add);
  },

  renderRoom: function(newRoom) {
    var text = '<div class="room"><%= newRoom %></div>';
    this.$select.append(text);
  }
};
