/* Exercise -   Write an HTTP server that receives only POST requests and converts  
  incoming POST body characters to upper-case and returns it to the client.  
   
  Your server should listen on the port provided by the first argument to  
  your program.  
*/


var http = require('http');

var server = http.createServer(function(req,res){
    if(req.method == 'POST'){
        var body = '';
        req.on('data', function (data) {
            body += data.toString().toUpperCase();
        }).on('end',()=>
    res.end(body));
    }
})

server.listen(Number(process.argv[2]));
