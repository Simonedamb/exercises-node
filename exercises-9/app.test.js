const supertest = require("supertest");
const createApp = require("./app.js");
const app = createApp();
const request = supertest(app);

test("GET/", async () => {
  const response = await request
    .get("/")
    .expect(200)
    .expect("Content-Type", "application/json");

  expect(response.body).toEqual({ name: "Welcome to the World Wide Web!" });
});
