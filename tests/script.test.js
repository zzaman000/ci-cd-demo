const { getMessage } = require("../src/script");

test("returns correct message", () => {
  expect(getMessage()).toBe("Pipeline is working!");
});