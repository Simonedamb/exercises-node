import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log("Received");
  res.statusCode = 200;
  res.setHeader("content-Type", "application/json");
  const json = JSON.stringify({ location: "Mars" });
  res.end(json);
});
server.listen(3000, () => {
  console.log(`server running at http://localhost:3000`);
});
