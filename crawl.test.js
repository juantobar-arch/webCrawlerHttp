const { normalizeURL } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

test('normalizeURL strip protocol', () => { 
    const input = 'https://www.example.com/path';
    const actual = normalizeURL(input);
    const expected = 'www.example.com/path';
    expect(actual).toEqual(expected);
});

test('normalizeURL strip trailing slash', () => { 
    const input = 'https://www.example.com/path/';
    const actual = normalizeURL(input);
    const expected = 'www.example.com/path';
    expect(actual).toEqual(expected);
});

test('normalizeURL capitals', () => { 
    const input = 'https://www.EXAMPLE.com/path/';
    const actual = normalizeURL(input);
    const expected = 'www.example.com/path';
    expect(actual).toEqual(expected);
});

test('normalizeURL strip http', () => { 
    const input = 'http://www.EXAMPLE.com/path/';
    const actual = normalizeURL(input);
    const expected = 'www.example.com/path';
    expect(actual).toEqual(expected);
});

