const { expect } = require("chai");

const middle = require("../middle");

describe("middle()", () => {

  it("should return [] when passed [1]", () => {
    const input = [1];
    const expectedOutput = [];

    expect(middle(input)).to.deep.equal(expectedOutput);
  });

  it("should return [] when passed [1, 2]", () => {
    const input = [1, 2];
    const expectedOutput = [];

    expect(middle(input)).to.deep.equal(expectedOutput);
  });

  it("should return [2] when passed [1, 2, 3]", () => {
    const input = [1, 2, 3];
    const expectedOutput = [2];

    expect(middle(input)).to.deep.equal(expectedOutput);
  });

  it("should return [3, 4] when passed [1, 2, 3, 4, 5, 6]", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const expectedOutput = [3, 4];

    expect(middle(input)).to.deep.equal(expectedOutput);
  });

});