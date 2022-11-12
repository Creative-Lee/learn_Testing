function test1() {
  return "123";
}
function test2() {
  return 123;
}
function test3() {
  return { 123: 123 };
}
function test4() {
  return [123];
}
function test5() {
  return new Promise();
}
async function test6() {
  return "123";
}

module.exports = {
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
};
