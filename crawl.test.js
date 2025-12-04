const { normalizeURL, getURLsFromHTML } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

test("normalizeURL strip protocol", () => {
  const input = "https://www.example.com/path";
  const actual = normalizeURL(input);
  const expected = "www.example.com/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL strip trailing slash", () => {
  const input = "https://www.example.com/path/";
  const actual = normalizeURL(input);
  const expected = "www.example.com/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL capitals", () => {
  const input = "https://www.EXAMPLE.com/path/";
  const actual = normalizeURL(input);
  const expected = "www.example.com/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL strip http", () => {
  const input = "http://www.EXAMPLE.com/path/";
  const actual = normalizeURL(input);
  const expected = "www.example.com/path";
  expect(actual).toEqual(expected);
});

// Additional tests for getURLsFromHTML can be added here when the function is implemented

test("getURLsFromHTM absolute", () => {
  const inputHTMLBody = `
    <html>
        <body>
            <a href="https://www.example.com/path/">Example</a>
        </body>
    </html>
    `;
  const inputBaseURL = "https://www.example.com/path/";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://www.example.com/path/"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTM relative", () => {
  const inputHTMLBody = `
    <html>
        <body>
            <a href="/path/">Example</a>
        </body>
    </html>
    `;
  const inputBaseURL = "https://www.example.com";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://www.example.com/path/"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTM both", () => {
  const inputHTMLBody = `
    <html>
        <body>
            <a href="https://www.example.com/path1/">
            Path 1
            </a>
            <a href="/path2/">
            Path 2
            </a>
        </body>
    </html>
    `;
  const inputBaseURL = "https://www.example.com";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = [
    "https://www.example.com/path1/",
    "https://www.example.com/path2/",
  ];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTM invalid", () => {
  const inputHTMLBody = `
    <html>
        <body>
            <a href="invalid">
            Invalid
            </a>
        </body>
    </html>
    `;
  const inputBaseURL = "https://www.example.com";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = [];
  expect(actual).toEqual(expected);
});
