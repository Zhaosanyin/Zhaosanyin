const http = require('http');
const server = http.createServer((request, response)=> {
  console.log(request.method);
  console.log(request.url);
  response.writeHead(200, {
    'Content-Type': 'test/plain'
  });
  if (request.method === "GET" && request.url === "/") {
    response.end("Home Page");
  }
  if (request.method === "GET" && request.url === "/about") {
    response.end("About Page");
  }
  if (request.method === "GET" && request.url === "/contact") {
    response.end("Contact Page");
  }
});

server.listen(8080, ()=>{
  console.log("The server is running on PORT 4001");
});