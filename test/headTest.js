const { expect } = require("chai");

const head = require("../head");

describe("head()", () => {

  it("should return 1 when passed [1, 2, 3]", () => {
    const input = [1, 2, 3];
    const expectedOutput = 1;

    expect(head(input)).to.equal(expectedOutput);
  });

  it("should return 'Hello' when passed ['Hello', 'World']", () => {
    const input = ["Hello", "World"];
    const expectedOutput = "Hello";

    expect(head(input)).to.equal(expectedOutput);
  });

  it("should return 5 when passed [5]", () => {
    const input = [5];
    const expectedOutput = 5;

    expect(head(input)).to.equal(expectedOutput);
  });

  it("should return undefined if passed []", () => {
    const input = [];
    const expectedOutput = undefined;

    expect(head(input)).to.equal(expectedOutput);
  });

});
