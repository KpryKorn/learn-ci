const hello = require("../src/hello-world");

test("hello name", () => {
  expect(hello("Node")).toBe("Hello Node");
});
