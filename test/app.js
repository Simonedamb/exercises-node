const { createServer } = require("node:http");

function createApp() {
  return createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const jsonResponse = JSON.stringify({ location: "Milano" });
    res.end(jsonResponse);
  });
}

module.exports = createApp;
