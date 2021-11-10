const { isVowel } = require("./funciones")

test("Preguntando si a es vocal", () => {
    expect(isVowel("a")).toBe(true)
})

test("Preguntando si b es vocal", () => {
    expect(isVowel("b")).toBe(false)
})

test("Preguntando si e es vocal", () => {
    expect(isVowel("e")).toBe(true)
})