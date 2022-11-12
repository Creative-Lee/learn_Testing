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

describe("toEqual 테스트", () => {
  test("원시형 비교", () => {
    const output = "123";

    expect(output).toEqual("123"); // test passed!
  });

  test("참조형 비교", () => {
    const output = [1, 2, 3];

    expect(output).toEqual([1, 2, 3]); // test passed!
  });
});

describe.only("toEqual undefined 테스트", () => {
  test("참조형 비교 - 객체", () => {
    const output = { a: 1, b: 2 };

    expect(output).toEqual({ a: 1, b: 2, c: undefined }); // test passed!!!!????
  });

  test("참조형 비교 - 배열", () => {
    const output = [1, 2, 3];

    expect(output).toEqual([1, 2, 3, undefined]); // test passed!!!!!???
  });
});
