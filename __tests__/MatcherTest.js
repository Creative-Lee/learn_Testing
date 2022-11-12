describe("toBe 테스트", () => {
  test("원시형 비교", () => {
    const result = "123";

    expect(result).toBe("123"); // test passed!
  });

  test("참조형 비교", () => {
    const result = [1, 2, 3];

    expect(result).toBe([1, 2, 3]); // test failed!
  });
});

describe("toEqual 테스트", () => {
  test("원시형 비교", () => {
    const result = "123";

    expect(result).toEqual("123"); // test passed!
  });

  test("참조형 비교", () => {
    const result = [1, 2, 3];

    expect(result).toEqual([1, 2, 3]); // test passed!
  });
});

describe("toEqual undefined 테스트", () => {
  test("참조형 비교 - 객체", () => {
    const result = { a: 1, b: 2 };

    expect(result).toEqual({ a: 1, b: 2, c: undefined }); // test passed!!!!????
  });

  test("참조형 비교 - 배열", () => {
    const result = [1, 2, 3];

    expect(result).toEqual([1, 2, 3, undefined]); // test passed!!!!!???
  });
});

describe("toStrictEqual undefined 테스트", () => {
  test("참조형 비교 - 객체", () => {
    const result = { a: 1, b: 2 };

    expect(result).toStrictEqual({ a: 1, b: 2, c: undefined }); // test failed ^^
  });

  test("참조형 비교 - 배열", () => {
    const result = [1, 2, 3];

    expect(result).toStrictEqual([1, 2, 3, undefined]); //  test failed ^^
  });
});

describe("toEqual vs toStrictEqual 인스턴스 테스트", () => {
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

describe.only("toBeTruthy / toBeFalsy 테스트", () => {
  test("toBeTruthy 테스트", () => {
    const result = "0";

    expect(result).toBeTruthy(); // test passed !!
  });

  test("toBeFalsy 테스트", () => {
    const result = 0;

    expect(result).toBeFalsy(); // test passed !!
  });
});
