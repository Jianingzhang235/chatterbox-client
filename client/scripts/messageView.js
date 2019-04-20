var MessageView = {

  render: _.template(`
     
      <div class="chat">
        <div class="username"></div>
        <div class="message"><%= text %></div>
        <div class="room"><%= roomname %></div>
      </div>
    
    `)

};


// create a template function to render a message to HTML