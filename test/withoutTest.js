const { expect } = require("chai");

const without = require("../without");

describe("without()", () => {

  it("should return [3] when passed [1, 2, 3] and [1, 2]", () => {
    const input = [1, 2, 3];
    const itemsToRemove = [1, 2];

    expect(without(input, itemsToRemove))
      .to.deep.equal([3]);

    expect(input)
      .to.deep.equal(input);
  });

});