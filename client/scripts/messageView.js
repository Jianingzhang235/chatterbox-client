var MessageView = {

  render: _.template(`
<<<<<<< HEAD
     
      <div class="chat">
        <div class="username"></div>
        <div class="message"><%= text %></div>
        <div class="room"><%= roomname %></div>
      </div>
    
=======
      <div class="chat">
        <div class="username"><%= username %></div>
        <div><%= text %></div>
      </div>
>>>>>>> solo1
    `)

};


// create a template function to render a message to HTML