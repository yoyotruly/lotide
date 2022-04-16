const { expect } = require("chai");

const countLetters = require("../countLetters");

describe("countLetters()", () => {

  it("should return { a: 3, b: 1 } when passed 'aba a'", () => {
    const input = "aba a";
    const expectedOutput = { a: 3, b: 1 };

    expect(countLetters(input))
      .to.deep.equal(expectedOutput);
  });

});