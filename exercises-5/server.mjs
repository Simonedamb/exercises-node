import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log("Received");
  req.statusCode = 200;
  res.setHeader("content-Type", "text/html");
  res.end("<html><body><h1>Hello World!</h1></body></html>");
});
server.listen(3000, () => {
  console.log(`server running at http://localhost:3000`);
});
