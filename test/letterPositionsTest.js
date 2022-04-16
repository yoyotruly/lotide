const { expect } = require("chai");

const letterPositions = require("../letterPositions");

describe("letterPositions()", () => {

  it("should return { a: [0, 2, 4], b: [1] } when passed 'aba a'", () => {
    expect(letterPositions("aba a"))
      .to.deep.equal({ a: [0, 2, 4], b: [1] });
  });

});