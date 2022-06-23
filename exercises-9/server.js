const createApp = require("./app.js");
const app = createApp();

app.listen(3000, () => {
  console.log(`Sei sul server http://localhost:3000`);
});
