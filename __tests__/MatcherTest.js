const { test1 } = require("../src/index.js");

describe("toBe", () => {
  test("toBe", () => {
    const output = test1(); // '123' 을 return하는 함수

    expect(output).toBe("123");
  });
});
