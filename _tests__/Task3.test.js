const calculator = require("../Task3")

describe ("Check if Calculator function well", () => {
    test("check if '4+3 = 7 ", () => {
        expect(calculator.add(4, 3)).toBe(7)
    })

    test("check if '4-3 = 1 ", () => {
        expect(calculator.substract(4, 3)).toBe(1)
    })

    test("check if '6/3 = 2 ", () => {
        expect(calculator.divide(6, 3)).toBe(2)
    })

    test("check if '2*3 = 6 ", () => {
        expect(calculator.multiply(2, 3)).toBe(6)
    })
})