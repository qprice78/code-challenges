const { removeA } = require("./index");

describe("RemoveA function", () => {

    test("removes all characters 'a'in a given string", () => {
        expect(removeA("absolutely")).toBe("bsolutely")
        expect(removeA("Always a good time")).toBe("lwys  good time")
    })

})
