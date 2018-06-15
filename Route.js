    //custom route for fetching data  
    var transactions = require('./Transaction');  
      
    module.exports = {  
        //set up route configuration that will be handle by express server  
        configure: function (app) {  
      
            // adding route for data, here app is express instance which provide use  
            // get method for handling get request from http server.   
            app.get('/result', function (req, res) {  
                transactions.getAllData(res);  
            });  
   
      
        }  
    };  
