const { expect } = require("chai");

const flatten = require("../flatten");

describe("flatten()", () => {

  it("should return [1, 2, 3, 4, 5, 6, 7] when passed [1, [2, [3]], 4, [5, [6, 7]]]", () => {
    expect(flatten([1, [2, [3]], 4, [5, [6, 7]]]))
      .to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
  });

});