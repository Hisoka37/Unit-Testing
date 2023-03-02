const reverseString = require ("../task2")

test("Check if the string reversed", () => {
    expect(reverseString("abcd")).toBe("dcba");
});