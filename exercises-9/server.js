const createaApp = require("./app.js");

const app = createaApp();

app.listen(3000, () => {
  console.log(`Sei sul server http://localhost:3000`);
});
