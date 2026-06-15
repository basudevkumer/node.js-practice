const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("Home");
  }else if(req.url === "/about" && req.method === "GET"){
    res.end("About")
  }else{
    res.writeHead(404);
    res.end("404 not found!")
  }
});


server.listen(5000, ()=>{
    console.log("server is running...");
    
})