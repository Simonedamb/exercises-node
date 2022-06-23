const sum = require("./sum.js");

test("Dammi il totale", () => {
  expect(sum(4, 2)).toBe(6);
});
