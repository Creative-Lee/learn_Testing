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

describe("toEqual undefined 테스트", () => {
  test("참조형 비교 - 객체", () => {
    const output = { a: 1, b: 2 };

    expect(output).toEqual({ a: 1, b: 2, c: undefined }); // test passed!!!!????
  });

  test("참조형 비교 - 배열", () => {
    const output = [1, 2, 3];

    expect(output).toEqual([1, 2, 3, undefined]); // test passed!!!!!???
  });
});

describe("toStrictEqual undefined 테스트", () => {
  test("참조형 비교 - 객체", () => {
    const output = { a: 1, b: 2 };

    expect(output).toStrictEqual({ a: 1, b: 2, c: undefined }); // test failed ^^
  });

  test("참조형 비교 - 배열", () => {
    const output = [1, 2, 3];

    expect(output).toStrictEqual([1, 2, 3, undefined]); //  test failed ^^
  });
});

describe.only("toEqual vs toStrictEqual 인스턴스 테스트", () => {
  class Test {
    constructor(test) {
      this.test = test;
    }
  }

  test("toEqual 인스턴스 테스트", () => {
    const instance = new Test(1);
    const normal = { test: 1 };

    expect(normal).toEqual(instance); // test passed !!
  });

  test("toStrictEqual 인스턴스 테스트", () => {
    const instance = new Test(1);
    const normal = { test: 1 };

    expect(normal).toStrictEqual(instance); // test failed !!
  });
});
