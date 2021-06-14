import { findSum } from "./challenge03"

describe("findSum", () => {

    test("Should return false if solution does not exist", () => {
        expect(Array.isArray(findSum([1], 81)))
            .toBe(false)
    })
    
    test("Should return false if solution does not exist", () => {
        expect(Array.isArray(findSum([1, 21], 81)))
            .toBe(false)
    })

    test("Should return an array if solution exists", () => {
        expect(Array.isArray(findSum([1, 21, 3, 14, 5, 60, 7, 6], 81)))
            .toBe(true)
    })

    test("Should return [21,60]", () => {
        expect(findSum([1, 21, 3, 14, 5, 60, 7, 6, 8], 81))
            .toEqual([21, 60])
    })


})