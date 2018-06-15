var connection = require('./MySQLConnection');  
  
function Transaction() {  
  
    // get all data   
    this.getAllData = function (res) {  
        // initialize database connection  
        connection.init();  
        // calling acquire methods and passing callback method that will be execute query  
        // return response to server   
        connection.acquire(function (err, con) {  
            con.query('SELECT DISTINCT * FROM sec_zilla_parishad', function (err, result) {  
                con.release();  
                res.send(result);  
            });  
        });  
    };  
  
}  
  
module.exports = new Transaction();  
