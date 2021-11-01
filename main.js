var http = require('http');
var fs = require('fs');

// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log('Program has ended');

fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log('Program has ended');
// http
//   .createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.end('Hello World\n');
//   })
//   .listen(8081);

// console.log('Server running at http://127.0.0.1:8081');
