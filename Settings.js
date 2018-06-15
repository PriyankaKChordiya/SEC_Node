    /**  
     * Starting point of the server

	use 'node Settings.js' to run server  
    */  
    var express = require('express');  
    var bodyparser = require('body-parser');  
      
    var routes = require('./Route');  
      
    // creating server instance  
    var app = express();  
      
    // for posting nested object if we have set extended true  
    app.use(bodyparser.urlencoded({ extended : true}));  
      
    // parsing JSON  
    app.use(bodyparser.json());  
      
    //set application route with server instance  
    routes.configure(app);  
      
    // listening application on port 8000  
    var server = app.listen(8000, function(){  
        console.log('Server Listening on port ' + server.address().port);  
    });  
