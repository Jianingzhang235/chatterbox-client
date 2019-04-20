var MessageView = {

  render: _.template(`
     
      <div class="chat">
        <div class="username"></div>
        //this is where the display of the message will show along with the name
        <div></div>
      </div>
    
    `)

};


// create a template function to render a message to HTML