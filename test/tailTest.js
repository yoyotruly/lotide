const { expect } = require("chai");

const tail = require("../tail");


describe("tail()", () => {

  it("should return ['there', 'world'] when passed ['hello', 'there', 'world'] without modifying the input array", () => {
    const input = ["Hello", "there", "world"];
    const expectedOutput = ["there", "world"];

    expect(tail(input)).to.deep.equal(expectedOutput);
    expect(input).to.deep.equal(input);
  });

  it("should return [] when passed []", () => {
    const input = [];
    const expectedOutput = [];

    expect(tail(input)).to.deep.equal(expectedOutput);
  });

  it("should return [] when passed [1]", () => {
    const input = [1];
    const expectedOutput = [];

    expect(tail(input)).to.deep.equal(expectedOutput);
  });

});