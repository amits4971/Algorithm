/* Exercise -   Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Collect all data from the server (not  
  just the first "data" event) and then write two lines to the console  
  (stdout).  
   
  The first line you write should just be an integer representing the number  
  of characters received from the server. The second line should contain the  
  complete String of characters sent by the server.  
   
*/

var http = require('http')

var data = '';
var length = 0;

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on('data', function(chunk){
    data += chunk;  
      length += chunk.length;
  });
  response.on('end',function(){
    console.log(length);
    console.log(data);
})
  response.on('error', console.error)
}).on('error', console.error)
