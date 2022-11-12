describe("toBe 테스트", () => {
  test("원시형 비교", () => {
    const output = "123";

    expect(output).toBe("123"); // test passed!
  });

  test("참조형 비교", () => {
    const output = [1, 2, 3];

    expect(output).toBe([1, 2, 3]); // test failed!
  });
});

describe.only("toEqual 테스트", () => {
  test("원시형 비교", () => {
    const output = "123";

    expect(output).toEqual("123"); // test passed!
  });

  test("참조형 비교", () => {
    const output = [1, 2, 3];

    expect(output).toEqual([1, 2, 3]); // test passed!
  });
});
