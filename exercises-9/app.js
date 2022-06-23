const { createServer } = require("node:http");

function createApp() {
  return createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    // const obj = {
    //   name: "Welcome to the World Wide Web!",
    // };
    const jsoResponse = JSON.stringify({
      name: "Welcome to the World Wide Web!",
    });
    res.end(jsoResponse);
  });
}
module.exports = createApp;
