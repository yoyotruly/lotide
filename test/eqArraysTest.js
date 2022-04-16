const { expect } = require("chai");

const eqArrays = require("../eqArrays");

describe("eqArrays()", () => {

  it("should return true when passed [1, 2] and [1, 2]", () => {
    expect(eqArrays([1, 2], [1, 2]))
      .to.be.true;
  });

  it("should return false when passed [1, 2] and [2, 1]", () => {
    expect(eqArrays([1, 2, 3], [1, 2]))
      .to.be.false;
  });

  it("should return true when passed [] and []", () => {
    expect(eqArrays([], []))
      .to.be.true;
  });

});