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

describe("toBeTruthy / toBeFalsy 테스트", () => {
  test("toBeTruthy 테스트", () => {
    const result = "0";

    expect(result).toBeTruthy(); // test passed !!
  });

  test("toBeFalsy 테스트", () => {
    const result = 0;

    expect(result).toBeFalsy(); // test passed !!
  });
});

describe("toContain 테스트", () => {
  test("배열 테스트", () => {
    const result = [1, 2, 3];

    expect(result).toContain(1); // test passed !!
  });

  test("문자열 테스트", () => {
    const result = "문자열 테스트";

    expect(result).toContain("문자열"); // test passed !!
  });

  test("Set 테스트", () => {
    const result = new Set([1, 2, 3]);

    expect(result).toContain(1); // test passed !!
  });
});

describe("toHaveLength 테스트", () => {
  test("배열 테스트", () => {
    const result = [1, 2, 3];

    expect(result).toHaveLength(3); // test passed !!
  });

  test("문자열 테스트", () => {
    const result = "문자열 테스트";

    expect(result).toHaveLength(7); // test passed !!
  });
});

describe.only("toThrow 테스트", () => {
  const testFunc = () => {
    throw new Error("에러 테스트 함수입니다.");
  };
  const errorObj = new Error("에러 테스트 함수입니다.");

  test("인자 X", () => {
    expect(testFunc).toThrow(); // test passed !!
  });

  test("문자열 인자", () => {
    expect(testFunc).toThrow("에러 테스트"); // test passed !!
  });

  test("Error 객체 인자", () => {
    expect(testFunc).toThrow(errorObj); // test passed !!
  });

  test("클래스 인자", () => {
    expect(testFunc).toThrow(Error); // test passed !!
  });
});
