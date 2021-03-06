//A basic http server on NodeJS
var http = require('http'),
    emoji = require('node-emoji');

http.createServer(function (request, response) {
   console.log('Request recieved!');
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello, World!"
   response.end('Hello, World! ' + emoji.random().emoji + '\n');
}).listen(3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');


