const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  //   console.log(req.method);

  res.writeHead(200, { // 200-success, 201-new-resorce create, 404-page not found , 500- server error
    "Content-Type": "text/html",
  });

  res.end("<h1>Hello</h1>");
});

server.listen(5000);
