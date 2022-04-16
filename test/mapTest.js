const { expect } = require("chai");

const map = require("../map");

describe("map()", () => {
  
  it("should return ['b', 'd'] when passed ['big', 'dog'] and callback x => x[0]", () => {
    expect(map(["big", "dog"], x => x[0]))
      .to.deep.equal(["b", "d"]);
  });

});