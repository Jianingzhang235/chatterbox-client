var Rooms = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),
  
  add: function(roomname){


    var addedRoom = $('<div>'+ roomname + '</div>');
    this.$select.append(addedRoom);
    
  }
};