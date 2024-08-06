const { test, expect } = require("@jest/globals");
const { sortPages } = require("./report.js");

test('sortPages', () => {
    const input = {
        'https://wagslane.dev/path': 1,
        'https://wagslane.dev': 3
    }
    const actual = sortPages(input)
    const expected = [
        ['https://wagslane.dev', 3],
        ['https://wagslane.dev/path', 1]
    ]
    expect(actual).toEqual(expected)
})

test(' five', () => {
    const input = {
        'https://wagslane.dev/path4': 4,
        'https://wagslane.dev/path2': 2,
        'https://wagslane.dev/path5': 5,
        'https://wagslane.dev/path1': 3,
        'https://wagslane.dev': 6
    }
    const actual = sortPages(input)
    const expected = [
        ['https://wagslane.dev', 6],
        ['https://wagslane.dev/path5', 5],
        ['https://wagslane.dev/path4', 4],
        ['https://wagslane.dev/path1', 3],
        ['https://wagslane.dev/path2', 2],
    ]
    expect(actual).toEqual(expected)
})